<template>
  <div class="ProductsDetail">
    <template v-if="presenter.item">
      <div class="ProductsDetail__Left">
        <img class="ProductsDetail__Image" :src="presenter.item.thumbnail"/>
      </div>
      <div class="ProductsDetail__Right">
        <div class="ProductsDetail__Info">
          <div class="ProductsDetail__Designer">{{ presenter.item.designer }}</div>
          <div class="ProductsDetail__Nam">{{ presenter.item.name }}</div>
          <div class="ProductsDetail__Price">£{{ presenter.item.price }}</div>
        </div>
        <div v-if="!presenter.isInCart" class="ProductsDetail__Button">
          <Button text="カートに追加" autoWidth @click="addItemToCart"/>
        </div>
        <div v-else class="ProductsDetail__Button">
          <Button text="追加済み" autoWidth disabled/>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { CartEntity } from "@/entities/Cart";
import { IProductsCriteria } from "@/entities/Product";
import presenter, { IPresenter, IPresenterState } from "./presenter";
import LoadContainerUseCase, {
  ILoadContainerUseCase
} from "./LoadContainerUseCase";
import DestroyContainerUseCase, {
  IDestroyContainerUseCase
} from "./DestroyContainerUseCase";
import ErrorService from "@/services/ErrorService";
import CartRepository from "@/repositories/CartRepository";
import ProductRepository from "@/repositories/ProductRepository";
import Button from "@/components/Base/Button.vue";
import Product from "@/components/Modules/Product.vue";
import AddItemToCartUseCase, {
  IAddItemToCartUseCase
} from "@/usecases/AddItemToCartUseCase";

export default Vue.extend({
  components: {
    Button,
    Product
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    presenter(): IPresenterState {
      const params: IPresenter = {
        productRepository: new ProductRepository(),
        cartRepository: new CartRepository()
      };
      return presenter(params);
    }
  },
  methods: {
    async addItemToCart() {
      const usecase = new AddItemToCartUseCase({
        cart: new CartEntity(),
        errorService: new ErrorService({
          context: "Adding the item to cart"
        })
      });

      await usecase.execute(this.presenter.item);
    }
  },
  async mounted() {
    const params: ILoadContainerUseCase = {
      productRepository: new ProductRepository(),
      id: parseInt(this.id, 10),
      errorService: new ErrorService({
        context: "mounting products detail page"
      })
    };

    await new LoadContainerUseCase(params).execute();
  },
  async destroyed() {
    const params: IDestroyContainerUseCase = {
      productRepository: new ProductRepository()
    };

    await new DestroyContainerUseCase(params).execute();
  }
});
</script>

<style>
.ProductsDetail {
  display: flex;
  width: 80%;
  margin: auto;
}

.ProductsDetail__Left {
  flex: 2;
}

.ProductsDetail__Right {
  flex: 1;
}

.ProductsDetail__Image {
  width: 100%;
  height: 100%;
}

.ProductsDetail__Designer {
  font-weight: bold;
  font-size: 22px;
}

.ProductsDetail__Name {
  font-size: 12px;
}

.ProductsDetail__Info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
}

.ProductsDetail__Price {
  font-weight: bold;
  font-size: 20px;
}

.ProductsDetail__Button {
  width: 100%;
}
</style>

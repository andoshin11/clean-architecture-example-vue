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
          <div class="ProductsDetail__Prices">
            <div class="ProductsDetail__PricesHire">£{{ presenter.item.hirePrice }}</div>
            <div class="ProductsDetail__PricesRetail">£{{ presenter.item.retailPrice }}</div>
          </div>
        </div>
        <div class="ProductsDetail__Button">
          <Button text="カートに追加" autoWidth/>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IProductsCriteria } from "@/entities/Product";
import presenter, { IPresenter } from "./presenter";
import defaultUseCase, { IProductsDetailPageUseCase } from "./useCase";
import destroyUseCase, {
  IProductsDetailPageDestroyUseCase
} from "./destroyUseCase";
import errorService from "@/services/ErrorService";
import { ProductRepository } from "@/repositories/ProductRepository";
import Button from "@/components/Base/Button.vue";
import Product from "@/components/Modules/Product.vue";

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
    presenter(): IPresenter {
      return presenter(this.$store.state);
    }
  },
  async mounted() {
    const params: IProductsDetailPageUseCase = {
      productRepository: new ProductRepository(),
      id: parseInt(this.id, 10),
      errorService: new errorService({
        context: "mounting products detail page"
      })
    };

    await new defaultUseCase(params).execute();
  },
  async destroyed() {
    const params: IProductsDetailPageDestroyUseCase = {
      productRepository: new ProductRepository()
    };

    await new destroyUseCase(params).execute();
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

.ProductsDetail__Prices {
  display: flex;
  align-items: flex-end;
  width: 100%;
}

.ProductsDetail__PricesHire {
  font-weight: bold;
  font-size: 20px;
  margin-right: 16px;
}

.ProductsDetail__Button {
  width: 100%;
}
</style>

<template>
  <div class="ProductsList">
    <div class="ProductsList__Products">
      <Product v-for="item in presenter.items" :key="item.id" :product="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// Interface Adapter
import Presenter, { IPresenter, IPresenterState } from "./presenter";
import LoadContainerUseCase, {
  ILoadContainerUseCase
} from "./LoadContainerUseCase";
import DestroyContainerUseCase, {
  IDestroyContainerUseCase
} from "./DestroyContainerUseCase";

import { IProductsCriteria } from "@/entities/Product";
import errorService from "@/services/ErrorService";
import ProductRepository from "@/repositories/ProductRepository";

// Components
import Product from "@/components/Modules/Product.vue";

export default Vue.extend({
  components: {
    Product
  },
  data() {
    return {
      page: 0,
      size: 20, // TODO: use constant val
      criteria: {
        designer: ""
      }
    };
  },
  computed: {
    productsParams(): PaginationRequest<IProductsCriteria> {
      return {
        page: this.page,
        size: this.size,
        criteria: this.criteria
      };
    },
    presenter(): IPresenterState {
      const params: IPresenter = {
        productRepository: new ProductRepository()
      };
      return Presenter(params);
    }
  },
  async mounted() {
    const params: ILoadContainerUseCase = {
      productRepository: new ProductRepository(),
      request: this.productsParams,
      errorService: new errorService({ context: "mounting products list page" })
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
.ProductsList__Products {
  display: flex;
  width: 40%;
}
</style>

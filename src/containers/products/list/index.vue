<template>
  <div class="ProductsList">
    <div class="ProductsList__Products">
      <Product v-for="item in presenter.items" :key="item.id" :product="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IProductsCriteria } from "@/entities/Product";
import presenter, { IPresenter } from "./presenter";
import defaultUseCase, { IProductsListPageUseCase } from "./useCase";
import errorService from "@/services/ErrorService";
import { ProductRepository } from "@/repositories/ProductRepository";
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
    presenter(): IPresenter {
      return presenter(this.$store.state);
    }
  },
  async mounted() {
    const params: IProductsListPageUseCase = {
      productRepository: new ProductRepository(),
      request: this.productsParams,
      errorService: new errorService({ context: "mounting products list page" })
    };

    await new defaultUseCase(params).execute();
  }
});
</script>

<style>
.ProductsList__Products {
  display: flex;
  width: 40%;
}
</style>

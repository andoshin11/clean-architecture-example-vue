<template>
  <div class="ProductsList">
    <span>Products List Container</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IProductsCriteria } from "@/entities/Product";
import defaultUseCase, { IProductsListPageUseCase } from "./useCase";
import errorService from "@/services/ErrorService";
import { ProductRepository } from "@/repositories/ProductRepository";

export default Vue.extend({
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

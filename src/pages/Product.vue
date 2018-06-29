<template>
  <ProductsDetailContainer :id="$route.params.id"/>
</template>

<script lang="ts">
import Vue from "vue";
import ProductsDetailContainer from "@/containers/products/detail/index.vue";

export default Vue.extend({
  name: "product",
  components: {
    ProductsDetailContainer
  }
});
</script>

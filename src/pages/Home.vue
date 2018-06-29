<template>
  <ProductsListContainer/>
</template>

<script lang="ts">
import Vue from "vue";
import ProductsListContainer from "@/containers/products/list/index.vue";

export default Vue.extend({
  name: "home",
  components: {
    ProductsListContainer
  }
});
</script>

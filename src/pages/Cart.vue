<template>
  <CartContainer/>
</template>

<script lang="ts">
import Vue from "vue";
import CartContainer from "@/containers/cart/index.vue";

export default Vue.extend({
  name: "home",
  components: {
    CartContainer
  }
});
</script>

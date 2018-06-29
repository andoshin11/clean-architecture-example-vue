<template>
  <a class="Product" :href="productUrl">
    <img class="Product__Image" :src="product.thumbnail"/>
    <div class="Product__Designer">{{ product.designer }}</div>
    <div class="Product__Name">{{ product.name }}</div>
    <div class="Produt__Price">£{{ product.price }}</div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
import { IProduct } from "@/entities/Product";

export default Vue.extend({
  props: {
    product: {
      type: Object as () => IProduct,
      required: true
    }
  },
  computed: {
    productUrl(): string {
      const id = this.product ? this.product.id : "";
      return `/#/products/${id}`;
    }
  }
});
</script>

<style>
.Product {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  text-decoration: none;
  transition: 0.3s;
  box-sizing: border-box;
  border: solid 1px #fff;
}

.Product:hover {
  border: solid 1px #ddd;
}

.Product__Image {
  min-height: 466px;
  width: 100%;
  height: 100%;
}

.Product__Designer {
  font-weight: bold;
}

.Product__Name {
  font-size: 13px;
  margin-bottom: 8px;
}

.Produt__Price {
  font-weight: bold;
}
</style>

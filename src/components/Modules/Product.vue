<template>
  <a class="Product" :href="productUrl">
    <img class="Product__Image" :src="product.thumbnail"/>
    <div class="Product__Designer">{{ product.designer }}</div>
    <div class="Product__Name">{{ product.name }}</div>
    <div class="Produt__Prices">
      <div class="Product__PricesHire">£{{ product.hirePrice }}</div>
      <div class="Product__PricesRetail">£{{ product.retailPrice }}</div>
    </div>
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

.Produt__Prices {
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin-bottom: 16px;
}

.Product__PricesHire {
  font-weight: bold;
}

.Product__PricesRetail {
  text-decoration: line-through;
}
</style>

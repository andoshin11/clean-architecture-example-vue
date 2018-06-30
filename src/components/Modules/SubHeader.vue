<template>
  <div class="SubHeader">
    <div class="SubHeader__Total">Total Price: £{{ totalPrice }}</div>
    <router-link class="SubHeader__Cart" to="/cart">
      My Cart<span v-if="cartItems && cartItems.length > 0" class="SubHeader__Badge">{{ cartItems.length }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ICartItem } from "@/entities/Cart";

export default Vue.extend({
  props: {
    totalPrice: {
      type: Number,
      required: true
    },
    cartItems: {
      type: Array as () => ICartItem[]
    }
  }
});
</script>


<style scoped>
.SubHeader {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  background-color: #2c3e50;
  padding: 0 5%;
}

.SubHeader__Total {
  color: #fff;
  margin-right: 20px;
}

.SubHeader__Cart {
  background-color: #fff;
  font-weight: bold;
  border-radius: 2px;
  padding: 0 8px;
}

.SubHeader__Badge {
  display: inline-block;
  background-color: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: #fff;
  margin-left: 8px;
}
</style>

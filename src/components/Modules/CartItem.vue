<template>
  <div class="CartItem">
    <div class="CartItem__Image">
      <img :src="item.thumbnail" :alt="item.name">
    </div>
    <div class="CartItem__Info">
      <div class="CartItem__Designer">{{ item.designer }}</div>
      <div class="CartItem__Name">
        {{ item.name }}
      </div>
      <div class="CartItem__Price">£ {{ item.price }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ICartItem } from "@/entities/Cart";

export default Vue.extend({
  props: {
    item: {
      type: Object as () => ICartItem,
      required: true
    }
  }
});
</script>

<style scoped>
.CartItem {
  display: flex;
  align-items: center;
  border: solid 1px #ddd;
}

.CartItem__Image {
  flex: 1;
}

.CartItem__Image > img {
  width: 100%;
  height: 100%;
}

.CartItem__Info {
  flex: 5;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
}

.CartItem__Designer {
  font-size: 20px;
  font-weight: bold;
}

.CartItem__Name {
  font-size: 16px;
}

.CartItem__Price {
  font-size: 18px;
  font-weight: bold;
}
</style>

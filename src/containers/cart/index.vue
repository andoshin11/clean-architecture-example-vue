<template>
  <div class="Cart">
    <div v-if="presenter.isEmpty" class="Cart__Empty">
      No item found in your cart...
    </div>
    <CartItem v-for="item in presenter.items" :key="item.id" :item="item" class="Cart__Item"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Presenter, { IPresenter, IPresenterState } from "./presenter";

import CartRepository from "@/repositories/CartRepository";

// Components
import CartItem from "@/components/Modules/CartItem.vue";

export default Vue.extend({
  components: {
    CartItem
  },
  computed: {
    presenter(): IPresenterState {
      const params: IPresenter = {
        cartRepository: new CartRepository()
      };

      return Presenter(params);
    }
  }
});
</script>

<style scoped>
.Cart {
  width: 60%;
  margin: auto;
}

.Cart__Item {
  margin-bottom: 16px;
}
</style>

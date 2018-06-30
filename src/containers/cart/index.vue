<template>
  <div class="Cart">
    <div v-if="presenter.isEmpty" class="Cart__Empty">
      No item found in your cart...
    </div>
    <template v-else>
      <CartItem v-for="item in presenter.items" :key="item.id" :item="item" class="Cart__Item"/>
      <Button text="checkout" @click="checkOut" :disabled="presenter.isCheckingOut"/>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Presenter, { IPresenter, IPresenterState } from "./presenter";
import CheckoutUseCase, { ICheckOutUseCase } from "./CheckOutUseCase";

import { CartEntity } from "@/entities/Cart";
import CartRepository from "@/repositories/CartRepository";
import ErrorService from "@/services/ErrorService";

// Components
import Button from "@/components/Base/Button.vue";
import CartItem from "@/components/Modules/CartItem.vue";

export default Vue.extend({
  components: {
    Button,
    CartItem
  },
  computed: {
    presenter(): IPresenterState {
      const params: IPresenter = {
        cartRepository: new CartRepository()
      };

      return Presenter(params);
    }
  },
  methods: {
    async checkOut() {
      const params: ICheckOutUseCase = {
        cart: new CartEntity(),
        errorService: new ErrorService({
          context: "checking out"
        })
      };

      await new CheckoutUseCase(params).execute();
    }
  }
});
</script>

<style scoped>
.Cart {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 60%;
  margin: auto;
}

.Cart__Item {
  margin-bottom: 16px;
}
</style>

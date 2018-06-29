<template>
  <div id="app">
    <SubHeader :totalPrice="presenter.totalPrice" :cartItems="presenter.cartItems"/>
    <Header/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Presenter, { IPresenter, IPresenterState } from "./presenter";
import CartRepository from "@/repositories/CartRepository";
import Header from "@/components/Modules/Header.vue";
import SubHeader from "@/components/Modules/SubHeader.vue";

export default Vue.extend({
  components: {
    Header,
    SubHeader
  },
  computed: {
    presenter(): IPresenterState {
      return Presenter({
        cartRepository: new CartRepository()
      });
    }
  }
});
</script>


<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  padding-top: 20px;
}
</style>

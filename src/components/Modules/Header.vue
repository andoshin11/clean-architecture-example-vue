<template>
  <div class="Header">
    <a href="/#/" class="Header__Title">EC Site Sample</a>
    <a href="https://github.com/andoshin11/clean-architecture-example-vue" class="Header__Link" target="_blank">
    GitHub
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>


<style scoped>
.Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;
  border-bottom: solid 1px #ddd;
  padding: 0 5%;
}

.Header__Title {
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.Header__Link {
  text-decoration: underline;
  transition: 0.3s;
  color: #333;
}

.Header__Link:hover {
  opacity: 0.6;
}

.Header__Link:visited {
  color: #333;
}
</style>

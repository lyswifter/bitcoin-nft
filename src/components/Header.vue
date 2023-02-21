<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="container">
    <img src="../assets/logo@2x.png" style="width: 91px;height: 49px;" alt="">
  </div>
</template>

<style scoped>
.container {
  background-image: url(../assets/Background_texture@2x.png);
  background-repeat: repeat;
  text-align: center;
}

.container img {
  margin-top: 29px;
}
</style>

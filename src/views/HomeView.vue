<template>
  <main>
    <!-- <button class="btn btn-danger" @click="isLoggedIn = !isLoggedIn">Đăng xuất</button> -->
    <p v-if="!isLoggedIn">Bạn đã đăng xuất!</p>
    <p v-show="!isLoggedIn">Chào mừng bạn đã đăng nhập!</p>
  </main>
</template>
<script setup>
import { ref } from 'vue'
const isLoggedIn = ref(true)
</script>

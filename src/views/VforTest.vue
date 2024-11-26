<template>
  <ul>
    <template v-for="item in items" :key="item.id">
      <li v-if="item.visible">{{ item.name }}</li>
    </template>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
const items = ref([
  { id: 1, name: 'Táo', visible: true },
  { id: 2, name: 'Chuối', visible: false },
  { id: 3, name: 'Dưa hấu', visible: true },
])
</script>

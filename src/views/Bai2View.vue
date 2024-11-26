<template>
  <div>
    <h2>Nhập tháng và xác định mùa</h2>

    <!-- Input để nhập tháng -->
    <input
      class="form-label"
      type="number"
      v-model="month"
      placeholder="Nhập tháng (1-12)"
      @input="checkMonth"
    />

    <!-- Hiển thị mùa hoặc thông báo lỗi -->
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-else-if="month >= 1 && month <= 3">Mùa: Mùa Xuân</p>
    <p v-else-if="month >= 4 && month <= 6">Mùa: Mùa Hè</p>
    <p v-else-if="month >= 7 && month <= 9">Mùa: Mùa Thu</p>
    <p v-else-if="month >= 10 && month <= 12">Mùa: Mùa Đông</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const month = ref(null)

    return {
      month,
    }
  },
}
</script>

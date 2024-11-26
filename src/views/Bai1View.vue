<template>
  <div>
    <h2>Nhập điểm trung bình của học sinh và xếp loại</h2>

    <input class="form-label" type="number" v-model="dtb" step="0.1" placeholder="Nhập ĐTB" />
    <button class="btn btn-primary" @click="xepLoai">Xếp loại</button>

    <p v-if="dtb !== null">
      <span v-if="dtb >= 0.0 && dtb < 5.0">Xếp loại: Yếu</span>
      <span v-else-if="dtb >= 5.0 && dtb < 6.5">Xếp loại: Trung bình</span>
      <span v-else-if="dtb >= 6.5 && dtb < 8.0">Xếp loại: Khá</span>
      <span v-else-if="dtb >= 8.0 && dtb < 9.0">Xếp loại: Giỏi</span>
      <span v-else-if="dtb >= 9.0 && dtb <= 10">Xếp loại: Xuất sắc</span>
      <span v-else>Vui lòng nhập điểm từ 0-10</span>
    </p>
    <p v-else>Vui lòng nhập điểm hợp lệ.</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const dtb = ref(null)

    return {
      dtb,
    }
  },
}
</script>

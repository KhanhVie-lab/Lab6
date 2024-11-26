<template>
  <div class="container mt-5 col-sm-12">
    <h2 class="mb-4">Thông tin sách</h2>
    <div class="list-group-item">
      <h4>{{ product.name }} - {{ product.price }} VNĐ</h4>
      <button @click="showDetails = !showDetails" class="btn btn-info">
        {{ showDetails ? 'Ẩn chi tiết' : 'Xem chi tiết' }}
      </button>
      <p v-show="showDetails" class="mt-2">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const product = ref({
      name: 'Vợ Nhặt',
      description:
        "Tác phẩm 'Vợ Nhặt' của tác giả Kim Lân mô tả tình cảnh đói nghèo thời kỳ nạn đói năm 1945, nhưng vẫn ánh lên niềm hy vọng về tình yêu và lòng nhân ái.",
      price: 55000,
    })

    const showDetails = ref(false)

    return { product, showDetails }
  },
}
</script>

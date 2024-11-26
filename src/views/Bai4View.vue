<template>
  <div class="container mt-5">
    <!-- Phần Form để thêm hoặc sửa thông tin học sinh -->
    <h2>{{ isEdit ? 'Cập nhật học sinh' : 'Thêm học sinh' }}</h2>
    <form @submit.prevent="handleSubmit" class="mb-4">
      <div class="mb-3">
        <label for="name" class="form-label">Họ tên</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="form-control"
          placeholder="Nhập họ tên"
          required
        />
      </div>
      <div class="mb-3">
        <label for="score" class="form-label">Điểm</label>
        <input
          type="number"
          id="score"
          v-model="form.score"
          class="form-control"
          placeholder="Nhập điểm"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dob" class="form-label">Ngày sinh</label>
        <input type="date" id="dob" v-model="form.dob" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">
        {{ isEdit ? 'Cập nhật' : 'Thêm' }}
      </button>
    </form>

    <!-- Phần Danh sách hiển thị các học sinh -->
    <h2>Danh sách học sinh</h2>
    <div class="list-group">
      <div
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="(student, index) in students"
        :key="student.id"
      >
        <span>{{ student.name }} - {{ student.score }} - {{ student.dob }}</span>
        <div>
          <button @click="editStudent(index)" class="btn btn-warning btn-sm me-2">Sửa</button>
          <button @click="deleteStudent(index)" class="btn btn-danger btn-sm">Xóa</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [], // Danh sách học sinh
      form: { id: null, name: '', score: null, dob: '' }, // Dữ liệu form
      isEdit: false, // Chế độ chỉnh sửa
    }
  },
  methods: {
    handleSubmit() {
      const index = this.students.findIndex((s) => s.id === this.form.id)
      if (this.isEdit && index !== -1) {
        // Cập nhật học sinh
        this.students[index] = { ...this.form }
        this.isEdit = false
      } else {
        // Thêm học sinh mới
        this.students.push({ ...this.form, id: Date.now() })
      }
      this.resetForm()
    },
    resetForm() {
      this.form = { id: null, name: '', score: null, dob: '' }
      this.isEdit = false
    },
    editStudent(index) {
      this.form = { ...this.students[index] }
      this.isEdit = true
    },
    deleteStudent(index) {
      this.students.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>

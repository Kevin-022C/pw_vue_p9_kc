<template>
  <div class="vehiculo-view">
    <VehiculoForm />
  </div>
</template>

<script>
import VehiculoForm from '../components/VehiculoForm.vue'

export default {
  name: 'VehiculoView',
  components: {
    VehiculoForm
  }
}
</script>

<style scoped>
.vehiculo-view {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>

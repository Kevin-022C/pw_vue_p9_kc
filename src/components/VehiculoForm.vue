<template>
  <div class="vehiculo-form">
    <h2>Agregar Vehículo</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label>Placa:</label>
        <input v-model="vehiculo.placa" required />
      </div>
      <div>
        <label>Modelo:</label>
        <input v-model="vehiculo.modelo" required />
      </div>
      <div>
        <label>Color:</label>
        <input v-model="vehiculo.color" required />
      </div>
      <div>
        <label>Año:</label>
        <input v-model="vehiculo.anio" type="number" required />
      </div>
      <div>
        <label>Marca:</label>
        <input v-model="vehiculo.marca" required />
      </div>
      <button type="submit">Agregar</button>
    </form>
    <div v-if="mensaje" class="mensaje">{{ mensaje }}</div>
  </div>
</template>

<script>
export default {
  name: 'VehiculoForm',
  data() {
    return {
      vehiculo: {
        placa: '',
        modelo: '',
        color: '',
        anio: '',
        marca: ''
      },
      mensaje: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:8086/vehiculo/api/v1.0/vehiculosUce', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.vehiculo)
        });
        if (response.ok) {
          this.mensaje = 'Vehículo agregado correctamente.';
          this.vehiculo = { placa: '', modelo: '', color: '', anio: '', marca: '' };
        } else {
          this.mensaje = 'Error al agregar vehículo.';
        }
      } catch (error) {
        this.mensaje = 'Error de conexión.';
      }
    }
  }
};
</script>

<style scoped>
.vehiculo-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
}
.vehiculo-form h2 {
  text-align: center;
}
.vehiculo-form div {
  margin-bottom: 12px;
}
.vehiculo-form label {
  display: block;
  margin-bottom: 4px;
}
.vehiculo-form input {
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
}
.vehiculo-form button {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.vehiculo-form .mensaje {
  margin-top: 10px;
  text-align: center;
  color: green;
}
</style>


<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <label for="username">Usuario:</label>
      <input type="text" id="username" v-model="usuario" required>

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="contraseña" required>

      
        

      <button type="submit" @click="login">generar</button>
    </form>
    <div v-if="token">
      <label for="tokenArea">Token generado:</label>
      <textarea id="tokenArea" rows="5" cols="60" readonly v-model="token"></textarea>
    </div>
  </div>
</template>

<script>
import { obtenerTokenFachada } from '../Clients/AutorisacionClient.js';
export default {
  name: 'Login',
  data() {
    return {
      usuario: '',
      contraseña: '',
      token: ''
    }
  },
  methods: {
    async login(event) {
      event.preventDefault();
      try {
        const token = await obtenerTokenFachada(this.usuario, this.contraseña);
        if (token) {
          this.token = token;
          localStorage.setItem('token', token);
          localStorage.setItem('esta', true);
          this.$router.push('/');
        } else {
          alert('Credenciales inválidas. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        alert('Error al obtener el token.');
        console.log(error);
      }
    }
  }
}
</script>
<style>
.login {
text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
<template>
  <div>
    <!--Botones de inicio sesion y registrar--->
    
    <v-row align="center" justify="end">
      <v-btn color="grey darken-3" rounded  @click="login" class="white--text">
        <h3>Iniciar Sesión</h3>
      </v-btn>
      
      <v-btn color="grey darken-3" rounded @click="registro" class="white--text">
        <h3>Registrar</h3>
      </v-btn>
    </v-row>

    <noticias />
    <servicios />
    <equipo />
    <peipagina />
  </div>
</template>

<script>
import Equipo from "../components/Equipo.vue";
import Noticias from "../components/Noticias.vue";
import Peipagina from "../components/Peipagina.vue";
import Servicios from "../components/Servicios.vue";

export default {
  components: {
    Servicios,
    Noticias,
    Equipo,
    Peipagina,
  },

  methods: {
    login() {
      console.log("Verificando credenciales");
      //Redirigir al login
      this.$router.push("/login");
    },
    registro() {
      console.log("Verificando credenciales");
      //Redirigir al registro
      this.$router.push("/registro");
    },
  },
};
</script>
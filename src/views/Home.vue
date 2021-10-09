<template>
<div>
  <v-container>
    <!--Botones de inicion y registrar--->
    <v-row
      align="center"
      justify="end"
    >
      <v-btn
        color="primary"
        elevation="10"
        rounded
        text @click="login"
      ><h3>Iniciar Sesión</h3></v-btn>
      <v-btn
        color="primary"
        elevation="10"
        rounded
        text @click="registro"
      ><h3>Registrar</h3></v-btn>
    </v-row>
    
    <servicios/>
    <noticias/>
    <equipo/>
    

  </v-container>
  <peipagina/>
  </div>
</template>

<script>
  import Equipo from '../components/Equipo.vue'
  import Noticias from '../components/Noticias.vue'
  import Peipagina from '../components/Peipagina.vue'
  import Servicios from '../components/Servicios.vue'
  
  export default {
    
    components: {
        Servicios,
        Noticias,
        Equipo,
        Peipagina,
        
    },

    methods: {
        login(){
            console.log("Verificando credenciales");
            //Redirigir al login
            this.$router.push('/login');
        },
        registro(){
            console.log("Verificando credenciales");
            //Redirigir al registro
            this.$router.push('/registro');
        },

    }
      
  }
</script>
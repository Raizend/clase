<template>
    <v-card id="card-login" style="color: blue" class="mx-auto" max-width="400">
    <v-card-text>
        <!--<h1 style="color: #00994c;">Ingresar</h1>-->
        <p class="text-h4 text--primary">Olvidé mi contraseña</p>
        <br>
        <v-form>
          <v-col cols="12" sm="6" md="10">
            <v-select
              :items="items"
              v-model="first"
              label="Tipo de documento"
              filled
              rounded
              dense
            ></v-select>
          </v-col>
        <v-col cols="12" sm="6" md="10">
            <v-text-field
              v-model="last"
              label="Número de documento"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </v-form>
    </v-card-text>
    <v-card-actions>
      
        <v-btn rounded color="blue" light @click="procesando"> Reestablecer </v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: ()=>{
        return{

        }
    },
    data: () => ({
    items: [
      "Cédula de ciudadania",
      "Tarjeta de identidad",
      "Cédula de extranjeria",
      "Registro Civil",
    ],
  }),
    methods: {
        procesando(){
            console.log("Verificando credenciales");
            //Redirigir al olvidé mi contraseña
            this.$router.push('/procesando');
        }
    }
};
</script>

<style>
#card-login{
    margin-top: 5rem;
    background: rgb(255, 255, 255);
    border-color: brown;
}
</style>
<template>
  <v-container>
    <v-card id="card-login" class="mx-auto" width="600" height="200">
      <v-img
        class="green--text align-end"
        height="200px"

        src="https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/10/25/Recortada/img_mrius_20191025-124605_imagenes_lv_terceros_vacuna_mascota_1-k1jC-U471178911221dS-992x558@LaVanguardia-Web.jpg"
      >
      </v-img>

      <v-card-text>
        <h1 class="text-center" style="color: #00994c">Iniciar Sesión</h1>
        <!--<p style="color: blue" class="text-h4 text--primary">Ingresar</p>-->
        <br />
        <v-form>
          <v-text-field
            label="Número de documento"
            placeholder="Número de documento"
            outlined
            v-model="numDoc"
            :rules="rules"
            required
            @input="$v.numDoc.$touch()"
            @blur="$v.numDoc.$touch()"
          ></v-text-field>
          <v-text-field
            label="Contraseña"
            placeholder="Contraseña"
            outlined
            type="password"
            v-model="confiPass"
            :rules="rules"
            required
            @input="$v.confiPass.$touch()"
            @blur="$v.confiPass.$touch()"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
          <v-row>
              <v-col
        class="d-flex"
        cols="12"
        sm="12"
      ><v-btn
          class="rounded"
          color="green"
          x-large
          block
          dark
          @click="login"
        >
          Iniciar Sesión
        </v-btn>
      </v-col>
        <v-col
        class="d-flex"
        cols="12"
        sm="12"
      > <v-btn
          class="rounded"
          color="#404040"
          x-large
          block
          dark
          @click="registro"
        >
          Regístrate
        </v-btn>
      </v-col>
          </v-row>
          

      </v-card-actions>
    </v-card>
    </v-container
  >
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, } from "vuelidate/lib/validators";


export default {
    
    mixins: [validationMixin],
    validations: {
    numDoc: { required },
    confiPass: { required },
  },


    data: ()=>{
        return{

          rules: [
            (v) => !!v || "Este campo es requerido",
            (v) => (v && v.length <= 30) || "Máximo 50 caracteres",
          ],

        }
    },
    methods: {
        login(){
            console.log("Verificando credenciales");
            //Redirigir al Tabla de Registro
            this.$v.$touch();
            this.$router.push('/mascota');

        },
        registro(){
            console.log("Verificando credenciales");
            //Redirigir al registro
            this.$router.push('/veterinario');
        },
        contrasenia(){
            console.log("Verificando credenciales");
            //Redirigir al olvidé mi contraseña
            this.$router.push('/contrasenia');
        }
    }
};
</script>

<style>
#card-login {
  align-self: center;
}
</style>
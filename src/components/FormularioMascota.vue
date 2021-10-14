<template>
  <div>
    
  <v-card id="card" class="mx-auto" max-width="1000">
    <v-img
      src="https://prestoncountryclubforpets.com/sites/default/files/banner/dogs-cats-banner.jpg"
      height="270px">
    </v-img>

    <!---Menu-->
    <v-toolbar elevation="8">
      <span>
        <v-img
          id="logo"
          src="https://cdn-icons-png.flaticon.com/128/1076/1076928.png"
          width="20%">
        </v-img>
      </span>

      <h2>Certificado y Registro de Mascotas </h2>
      <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green"
              dark
              v-bind="attrs"
              v-on="on">
                Menu
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="punto in puntos"
              :key="punto.text" router :to="punto.route">
              <v-list-item-title>{{ punto.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </v-toolbar>

      
      <form id="Tabla">
        <!--FILA 1-->
        <v-row>
          <v-col cols="4" sm="4" md="4">
            <v-text-field
              v-model="nameVete"
              :error-messages="nameErrors"
              :counter="25"
              label="Veterinario"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
              filled rounded
            ></v-text-field>
          </v-col>
        </v-row>
        <!--FILA 2-->
        <v-row>
          <v-col cols="4" sm="4" md="4">
            <v-text-field
              v-model="propietario"
              label="Nombre del dueño de la mascota"
              filled rounded
            ></v-text-field>
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field
              v-model="idDueño"
              label="Identificacion del dueño"
              filled rounded
            ></v-text-field>
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field
              v-model="telfono"
              :error-messages="telefonoErrors"
              label="Telefono del dueño"
              counter="25"
              required
              @input="$v.telfono.$touch()"
              @blur="$v.telfono.$touch()"
              filled rounded
            ></v-text-field>
          </v-col>
        </v-row>
        <!--FILA 3-->
        <v-row>
          <v-col cols="4" sm="4" md="4">
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail del dueño"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              filled rounded
            ></v-text-field>
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field
              v-model="namepet"
              label="Nombre de la mascota"
              filled rounded
            ></v-text-field>
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-select
              v-model="tipoPet"
              :items="items1"
              :error-messages="selectErrors"
              label="Tipo de Mascota"
              filled rounded
            ></v-select>
          </v-col>
        </v-row>
        <!--FILA 4-->
        <v-row>
          <v-col cols="4" sm="4" md="4">
            <v-select
              v-model="generoPet"
              :items="items2"
              label="Género"
              filled rounded
            ></v-select>
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field
              v-model="fecha"
              :error-messages="fechaErrors"
              label="Fecha de la Vacuna"
              required
              @change="$v.fecha.$touch()"
              @blur="$v.fecha.$touch()"
              filled rounded
            ></v-text-field>
            </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field
              v-model="vacuna"
              :error-messages="vacunaErrors"
              label="Vacuna"
              required
              @input="$v.vacuna.$touch()"
              @blur="$v.vacuna.$touch()"
              filled rounded
            ></v-text-field>
          </v-col>
        </v-row>

        <v-card-actions id="actions">
          <v-container>
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="¿Estas de acuerdo con está información suministrada ?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>

            <v-btn
              id="boton1"
              class="mr-4"
              color="green"
              x-large block
              dark
              v-on:click="registro"  
            >
              Registrar
            </v-btn>
            <v-btn id="boton2" color="grey" x-large block dark 
            v-on:click="clear"
            >
              limpiar
            </v-btn>
          </v-container>
        </v-card-actions>
      </form>
  </v-card>
  </div>
</template>

<script>
import store from "../store/index.js";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    nameVete: { required, maxLength: maxLength(25) },
    vacuna: { required },
    fecha: { required },
    email: { required, email },
    telefono: { required },
    tipoPet: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    nameVete: "",
    propietario:"",
    idDueño: "",
    telfono: "",
    email: "",
    namepet: "",
    tipoPet: null,
    generoPet: null,
    items1: ["Perro", "Gato", "Otro"],
    items2: ['Macho', 'Hembra'],
    fecha: "",
    vacuna: "",
    checkbox: false,

    puntos: [
        { title: 'Usuarios', route: '/tablaVete' },
        { title: 'Regintro Mascota', route: '/tablaMasco' },
      ],

  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked &&
        errors.push("Debes de estar de acuerdo para continuar");
      return errors;
    },
    vacunaErrors() {
      const errors = [];
      if (!this.$v.vacuna.$dirty) return errors;
      !this.$v.vacuna.required && errors.push("Vacuna es requerido");
      return errors;
    },
    fechaErrors() {
      const errors = [];
      if (!this.$v.fecha.$dirty) return errors;
      !this.$v.fecha.required && errors.push("La Fecha es requerida");
      return errors;
    },
    nameVeteErrors() {
      const errors = [];
      if (!this.$v.nameVete.$dirty) return errors;
      !this.$v.nameVete.maxLength &&
        errors.push("El nombre no debe de superar 25 caracteres");
      !this.$v.nameVete.required && errors.push("Se requiere un nombre");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail es requerido");
      return errors;
    },
    telefonoErrors() {
      const errors = [];
      if (!this.$v.telefono.$dirty) return errors;
      !this.$v.telefono.required && errors.push("Telefono es requerido");
      return errors;
    },
  },

  methods: {
    registro() {
      this.$v.$touch();

      let objmascota = {
        veterinario: this.nameVete,
        nombreDueño: this.propietario,
        ident_dueño: this.idDueño,
        tel_dueño: this.telfono,
        email_dueño: this.email,
        nombreMascota: this.namepet,
        tipo: this.tipoPet,
        genero: this.generoPet,
        fecha_vacuna: this.fecha,
        vacuna: this.vacuna,
      };
      //Crear Mascotas: realiza solicitud post al backend
        store.dispatch("crearMascota", objmascota);

    },
    clear() {
      this.$v.$reset();
      this.nameVete = "";
      this.namepet = "";
      this.email = "";
      this.telfono = "";
      this.fecha = "";
      this.tipoPet = null;
      this.generoPet = null;
      this.checkbox = false;
      this.vacuna = "";
      this.propietario="";
      this.idDueño="";
    },
  },
};
</script>

<style>

#Tabla {
  margin-bottom: 2vh;
  margin-top: 5vh;
}
#actions{
  margin-left: 20vw;
  margin-right: 20vw;
}
#boton1 {
  margin-bottom: 2%;
  ;
}
#boton2 {
  margin-bottom: 5%;
}

h2{
  text-anchor: middle;
  color: #00994c;
  text-align: center;
}
</style>
<template>
  <div>
    
  <v-card id="card" class="mx-auto" max-width="1000">
    <v-img
      src="https://prestoncountryclubforpets.com/sites/default/files/banner/dogs-cats-banner.jpg"
      height="270px">
    </v-img>

    <!---Menu-->
    <v-toolbar elevation="8">
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
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="25"
        label="Veterinario"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="propietario"
        label="Nombre del dueño de la mascota"
      ></v-text-field>
      <v-text-field
        v-model="cedulapropietario"
        label="Cédula del dueño"
      ></v-text-field>
      <v-text-field
        v-model="telfono"
        :error-messages="telefonoErrors"
        label="Telefono del dueño"
        counter="25"
        required
        @input="$v.telfono.$touch()"
        @blur="$v.telfono.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail del dueño"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="namepet"
        label="Nombre de la mascota"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Tipo de Mascota"
      ></v-select>
      <v-select
        v-model="select2"
        :items="genero"
        label="Género"
      ></v-select>
      <v-text-field
        v-model="fecha"
        :error-messages="fechaErrors"
        label="Fecha de la Vacuna"
        required
        @change="$v.fecha.$touch()"
        @blur="$v.fecha.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="vacuna"
        :error-messages="vacunaErrors"
        label="Vacuna"
        required
        @input="$v.vacuna.$touch()"
        @blur="$v.vacuna.$touch()"
      ></v-text-field>
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
        large
        block
        dark
        @click="registro"
      >
        Registrar
      </v-btn>
      <v-btn id="boton2" color="grey" large block dark @click="clear">
        limpiar
      </v-btn>
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
    name: { required, maxLength: maxLength(25) },
    vacuna: { required },
    fecha: { required },
    email: { required, email },
    telefono: { required },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    namepet: "",
    select: null,
    select2: null,
    items: ["Perro", "Gato", "Otro"],
    genero: ['Macho', 'Hembra'],
    telfono: "",
    fecha: "",
    vacuna: "",
    checkbox: false,
    propietario:"",
    cedulapropietario:"",

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
      !this.$v.fecha.required && errors.push("Vacuna es requerido");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("El nombre no debe de superar 25 caracteres");
      !this.$v.name.required && errors.push("Se requiere un nombre");
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
        veterinario:"",
        nombreDueño:"",
        ident_dueño:"",
        tel_dueño:"",
        email_dueño:"",
        nombreMascota:"",
        tipo:"",
        genero:"",
        fecha_vacuna:"",
        vacuna:"",
      };
      //Crear Mascotas: realiza solicitud post al backend
        store.dispatch("crearMascota", objmascota);

    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.namepet = "";
      this.email = "";
      this.telfono = "";
      this.fecha = "";
      this.select = null;
      this.select2 = null;
      this.checkbox = false;
      this.vacuna = "";
      this.propietario="";
      this.cedulapropietario="";
    },
  },
};
</script>

<style>

#Tabla {
  
  margin-left: 20vw;
  margin-right: 20vw;
  margin-bottom: 2vh;
  margin-top: 1vh;
  
}
#boton1 {
  margin-bottom: 2%;
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
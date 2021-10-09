<template>
  <v-card id="card" class="mx-auto" max-width="1000">
    <v-img
      src=" https://static.vecteezy.com/system/resources/previews/000/110/116/original/national-pet-week-dog-vectors.jpg"
      height="270px"
    ></v-img>

    <v-card-title id="card-title" class="text-h4 text--primary" >
     <h3>Certificado y registro </h3>
    </v-card-title>

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
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail del dueño de la mascota"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="namepet"
        :error-messages="namepetErrors"
        :counter="25"
        label="Nombre de la mascota"
        required
        @input="$v.namepet.$touch()"
        @blur="$v.namepet.$touch()"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Mascota"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="select2"
        :items2="items2"
        :error-messages="select2Errors"
        label="Género"
        required
        @change="$v.select2.$touch()"
        @blur="$v.select2.$touch()"
      ></v-select>
      <v-text-field
        v-model="vacuna"
        :counter="30"
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
        @click="submit"
      >
        subir
      </v-btn>
      <v-btn id="boton2" color="grey" large block dark @click="clear">
        limpiar
      </v-btn>
    </form>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(25) },
    namepet: { required },
    vacuna: { required },
    email: { required, email },
    select: { required },
    select2: { required },
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
    items2: ["Macho", "Hembra"],
    vacuna: "",
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked &&
        errors.push("Debes de estar de acuerdo para continuar");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Mascota es requerido");
      return errors;
    },
    select2Errors() {
      const errors = [];
      if (!this.$v.select2.$dirty) return errors;
      !this.$v.select2.required && errors.push("Género es requerido");
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
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    namepetErrors() {
      const errors = [];
      if (!this.$v.namepet.$dirty) return errors;
      !this.$v.namepet.maximoLength &&
        errors.push("Nombre supera los 25 caracteres");
      !this.$v.namepet.required && errors.push("Es requerido un nombre");
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.namepet = "";
      this.email = "";
      this.select = null;
      this.select2 = null;
      this.checkbox = false;
      this.vacuna = "";
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

h3{
  text-anchor: middle;
  color: #00994c;
}
</style>
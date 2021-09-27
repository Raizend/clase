<template>
  <form id="Tabla">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="25"
      label="Nombre"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
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
    <v-text-field
      v-model="municipio"
      :error-messages="municipioErrors"
      :counter="30"
      label="Municipio"
      required
      @input="$v.municipio.$touch()"
      @blur="$v.municipio.$touch()"
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Estas de acuerdo con está información suministrada ?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit"> subir </v-btn>
    <v-btn @click="clear"> limpiar </v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(25) },
    email: { required, email },
    select: { required },
    municpio:{required, maxLength: maxLength(30)},
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Perro", "Gato", "Otro"],
    municpio: null,
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
    municipioErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.municipio.maxLength &&
        errors.push("El municipio no debe de superar 30 caracteres");
      !this.$v.municipio.required && errors.push("Se requiere un Municipio");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
      this.municpio=null;
    },
  },
};
</script>

<style>
#Tabla{
    margin-left: 20vw;
    margin-right: 20vw;
    
}
</style>
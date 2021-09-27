<template>
  <form id="Tabla">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="25"
      label="Registrador"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="name2"
      :error-messages="name2Errors"
      :counter="25"
      label="Nombre de la mascota"
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
      v-model="municipio"
      :counter="30"
      label="Vacuna"
      required
      @input="$v.municipio.$touch()"
      @blur="$v.municipio.$touch()"
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="¿Estas de acuerdo con está información suministrada ?"
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
    select: null,
    items: ["Perro", "Gato", "Otro"],
    items2: ["Perro", "Gato", "Otro"],
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
    /*
    name2Errors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("El nombre no debe de superar 25 caracteres");
      !this.$v.name.required && errors.push("Se requiere un nombre");
      return errors;
    },*/
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    /*
    municipioErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.municipio.maxLength &&
        errors.push("El municipio no debe de superar 30 caracteres");
      !this.$v.municipio.required && errors.push("Se requiere un Municipio");
      return errors;
    },*/
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.name2 = "";
      this.email = "";
      this.select = null;
      this.select2 = null;
      this.checkbox = false;
      this.municpio = "";
    },
  },
};
</script>

<style>
#Tabla {
  margin-left: 20vw;
  margin-right: 20vw;
  margin-bottom: 4vh;
}
</style>
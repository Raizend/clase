<template>
  <div>
  <v-card id="card" class="mx-auto" max-width="1000">
    <!--<v-img
      src="https://media.istockphoto.com/photos/youngogs-and-cats-above-grey-banner-picture-id1131381748?b=1&k=20&m=1131381748&s=170667a&w=0&h=gV3De1A9IfKFRD0rGYKdcrioPQTxZypG49edl8tGKIM="
      height="270px">
    </v-img>-->

    <!---Menu-->
    <v-toolbar elevation="8">
      <h2>Certificado y Registro </h2>
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
        v-model="telfonoDueño"
        label="Telefono del dueño"
        counter="25"
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
        label="Mascota"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="select2"
        :items="genero"
        label="Género"
      ></v-select>
      <v-text-field
        v-model="vacuna"
        label="Vacuna"
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
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(25) },
    vacuna: { required },
    email: { required, email },
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
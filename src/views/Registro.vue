<template>
  <v-card id="card-sign" class="mx-auto" max-width="1000">
    <v-img
      src=" https://static.vecteezy.com/system/resources/previews/000/110/116/original/national-pet-week-dog-vectors.jpg"
      height="270px"
    ></v-img>

    <v-card-title id="card-title" class="text-h4 text--primary">
      Regístrate
    </v-card-title>

    <v-form id="formulario">
      <v-container>
        <v-row>
          <v-col cols="15" sm="7" md="6">
            <v-text-field
              v-model="first"
              label="Primer Nombre"
              placeholder="Primer nombre "
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="last"
              label="Segundo Nombre (Opcional)"
              placeholder="Segundo nombre (Opcional)"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="first"
              label="Primer Apellido"
              placeholder="Primer apellido "
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="last"
              label="Segundo Apellido (Opcional)"
              placeholder="Segundo apellido (Opcional)"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-select
              :items="items"
              v-model="first"
              label="Tipo de documento"
              filled
              rounded
              dense
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="last"
              label="Número de documento"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="first"
              label="Crear contraseña"
              type="password"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="last"
              label="Confirmar contraseña"
              type="password"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="first"
              label="Teléfono celular o fijo (Opcional)"
              placeholder="Teléfono celular o fijo "
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="last"
              label="Correo electrónico (Opcional)"
              placeholder="Correo electrónico (Opcional)"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <div class="text-center">
      <v-dialog v-model="dialog" width="600">
        <br />
        <br />

        <v-card>
          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="green" @click="tablaregistro"> Registrar </v-btn>
      <v-btn rounded color="grey" light @click="home"> Página Principal </v-btn>
      <v-btn rounded color="grey" light @click="login"> Iniciar Sesión </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      "Cédula de ciudadania",
      "Tarjeta de identidad",
      "Cédula de extranjeria",
      "Registro Civil",
    ],
  }),

  //data() {
  //  return {
  //    dialog: false,
  // };
  //},

  methods: {
    login() {
      console.log("Verificando credenciales");
      //Redirigir al home
      this.$router.push("/login");
    },
    home() {
      console.log("Verificando credenciales");
      //Redirigir al home
      this.$router.push("/home");
    },
    tablaregistro() {
      console.log("Verificando credenciales");
      //Redirigir al home
      this.$router.push("/tablaregistro");
    },
  },
};
</script>

<style>
#card-sign {
  margin-top: 5rem;
  margin-block-end: 5rem;
  border-color: brown;
}

#formulario {
  border-color: brown;
}

#card-title {
  color: rgb(22, 6, 37);
}
</style>
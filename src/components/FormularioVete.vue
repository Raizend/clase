<template>
  <v-card id="card-sign" class="mx-auto" max-width="1000" height="1000" :elevation="30">
    <v-img height="300px" class="green--text align-end"
      src="https://prestoncountryclubforpets.com/sites/default/files/banner/dogs-cats-banner.jpg"
      
    >
    <v-card-title ><h1>Formulario de Registro</h1></v-card-title>
    </v-img>

    <!--<h1 class="text-center" style="color: #00994c"></h1>-->

    <v-form id="formulario">
      <v-container>
        <v-row>
          <v-col cols="6" sm="6" md="6">
            <v-text-field
              v-model="first"
              label="Nombres"
              placeholder="nombres"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
          <!--
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
          -->

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="first"
              label="Apellidos"
              placeholder="Apellidos "
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
          <!--
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
          -->
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
              label="Teléfono celular o fijo (Opcional)"
              placeholder="Teléfono celular o fijo "
              filled
              rounded
              dense
              type="tel"
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
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <v-btn
            class="rounded"
            color="green"
            x-large
            block
            dark
            @click="tablaregistro"
          >
            Registrar
          </v-btn>
        </v-col>
      
        <v-col cols="12" sm="6"
          ><v-btn class="rounded"
            color="#404040"
            x-large
            block
            dark @click="home">
            Página Principal
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6"
          ><v-btn class="rounded"
            color="#404040"
            x-large
            block
            dark @click="login">
            Iniciar Sesión
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      "Cédula de ciudadania",
      "Cédula de extranjeria",
      
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
      this.$router.push("/mascota");
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
<template>
  <v-container>
  <v-card id="card-sign" class="mx-auto" max-width="1000" height="1000" :elevation="30">
    <v-img height="300px" class="green--text align-end"
      src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/2020-12/purina-consulta-veterinaria-para-mascotas-lo-que-debes-saber.jpg?itok=-YoxixyF"
    >
      <v-card-title >
        <h1>Formulario
        <br>
        De Registro
        </h1>
      </v-card-title>
    </v-img>

    <!--<h1 class="text-center" style="color: #00994c"></h1>-->
  
    <v-form ref="form" v-model="valid" lazy-validation id="tabla">
      <!-----FILA 1----->
      <v-row>
        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="nombres"
            :counter="30"
            :rules="rules"
            label="Nombres"
            placeholder="nombres"
            required
            filled
            dense
            rounded
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="apellidos"
            :counter="30"
            :rules="rules"
            label="Apellidos"
            required
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <!-----FILA 2----->
      <v-row>
        <v-col cols="6" sm="6" md="6">
          <v-select
            v-model="tipoDoc"
            :items="tipocc"
            label="Tipo de documento"
            filled
            rounded
            dense
          ></v-select>
        </v-col>

        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="numDoc"
            :counter="30"
            :rules="rules"
            label="Numero de Identificacion"
            required
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <!-----FILA 3----->
      <v-row>
        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="telefono"
            :counter="30"
            :rules="rules"
            label="Teléfono"
            required
            filled
            rounded
            dense
            type="number"
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="email"
            :counter="30"
            :rules="rules"
            label="E-mail"
            required
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <!-----FILA 4----->
      <v-row>
        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="password"
            :counter="30"
            :rules="rules"
            label="Contraseña"
            type="password"
            required
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="6" md="6">
          <v-text-field
            v-model="confiPass"
            :counter="30"
            :rules="rules"
            label="Confirma contraseña"
            type="password"
            required
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>

      <br />

    <v-card-actions id="actions">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          
          <v-btn :disabled="!valid" color="success" 
          class="mr-4" v-on:click="registrar" block x-large>
            Registrar
          </v-btn>
        </v-col>
      
        <v-col cols="12" sm="6"
          ><v-btn class="rounded"
            color="#404040"
            x-large
            block
            dark v-on:click="home">
            Página Principal
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6"
          ><v-btn class="rounded"
            color="#404040"
            x-large
            block
            dark v-on:click="login">
            Iniciar Sesión
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>

  </v-card>
  </v-container>
</template>

<script>
import store from "../store/index.js";

export default {
  data: () => {
    return {
      valid: true,
      nombres: "",
      apellidos: "",
      tipoDoc: "",
      numDoc: "",
      telefono: "",
      email: "",
      password: "",
      confiPass: "",

      tipocc: [
      "CC",
      "CE",
      ],

      rules: [
        (v) => !!v || "Este campo es requerido",
        (v) => (v && v.length <= 50) || "Máximo 50 caracteres",
      ],
    
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
    };
  },
  methods: {
    registrar() {
      if (this.$refs.form.validate()) {
        let objVeterinario = {
          nombres: this.nombres,
          apellidos: this.apellidos,
          tipoDoc: this.tipoDoc,
          numDoc: this.numDoc,
          telefono: this.telefono,
          email: this.email,
          password: this.password,
          confiPass: this.confiPass,
        };
        //Crear una persona; realiza solicitud post al backend
        store.dispatch("crearVeterinario", objVeterinario).then(() => {
          //Limpia el formulario cuando se registra una persona
          this.$refs.form.reset();
        });
      }
    },
    
    login() {
      //Redirigir al home
      this.$router.push("/login");
    },
    home() {
      //Redirigir al home
      this.$router.push("/home");
    },

  },
};
</script>

<style>
#tabla{
  margin-top: 5vh;
}
#actions{
  margin-right: 10vw;
  margin-left: 10vw;
}

</style>
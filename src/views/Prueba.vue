<!--<template>
<v-conteiner>


   <v-card id="carta"
    class="mx-auto"
    width="600"
    height="200"
  >
    <v-img
      class="green--text align-end"
      height="200px"
      src="https://i.pinimg.com/736x/ec/2b/10/ec2b106242f27b27116db6dcd75aff21.jpg"
    >
      <v-card-title>Iniciar Sesión</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-conteiner>
</template>-->

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
          ></v-text-field>
          <v-text-field
            label="Contraseña"
            placeholder="Contraseña"
            outlined
            type="password"
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
export default {};
</script>

<style>
#card-login {
  align-self: center;
}

</style>
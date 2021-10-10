<template>
  <v-container>
    <v-divider></v-divider>
    <h2 id="titulo1">Información de tu interés</h2>
    <v-divider></v-divider>
    <div id="services">
      <v-card height="300" color="#E0F2F1">
        <v-responsive :aspect-ratio="16 / 9">
          <v-card-text>
            <v-layout>
              <!--Tarjeta 1-->
              <v-flex>
                <v-card class="mx-auto" max-width="344" height="260">
                  <v-img
                    src="https://www.diariolibre.com/binrepository/1970x1024/0c0/0d0/none/10904/WXLC/preparava-vacuna-covdi-sinovac-en-pucmm-22042021-orlando-barria-efe-16243390-20210423224222_16511082_20210531152540.jpg"
                    height="100px"
                  >
                  </v-img>
                  <v-card-title > Tipos de vacunas </v-card-title>

                  <v-card-actions>
                    <v-btn outlined rounded x-large color="#4DB6AC" >
                      Quiero saber más!
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <!--Tarjeta 2-->
              <v-flex>
                <v-card class="mx-auto" max-width="344" height="260">
                  <v-img
                    src="https://www.diariolibre.com/binrepository/1970x1024/0c0/0d0/none/10904/WXLC/preparava-vacuna-covdi-sinovac-en-pucmm-22042021-orlando-barria-efe-16243390-20210423224222_16511082_20210531152540.jpg"
                    height="100px"
                  ></v-img>
                  <v-card-title> Haz tu certificado de vacunación! </v-card-title>
                  <v-card-actions>
                    <v-btn rounded outlined x-large color="#4DB6AC" @click="descargar" id="titulo2">
                      Descargar!
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <!--Tarjeta 3-->
              <v-flex>
                <v-card class="mx-auto" max-width="344" height="260">
                  <v-img
                    src="https://easy-anatomy.com/wp-content/uploads/2016/03/Veterinarian.png"
                    height="100px"
                  ></v-img>

                  <v-card-title> Información de tu interés </v-card-title>

                  <v-card-actions>
                    <v-btn rounded outlined x-large color="#4DB6AC">
                      Quiero saber más!
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            <!--Fin de tarjetas-->
          </v-card-text>
        </v-responsive>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  methods:{
      descargar(){
        console.log("Verificando credenciales");
        //Redirigir al registro
        this.$router.push('/mascota');
      },
  }
};
</script>

<style>
#services {
  padding-top: 2%;
}
#titulo1 {
  color: #404040;
}
#titulo2 {
  color: white;
}
#titulo3 {
  color: white;
}
</style>
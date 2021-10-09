<template>
  <v-container>
    <v-card color="#26A69A" flat class="text-center"> <h1 class="font-weight-black">Información de tu interés</h1> </v-card>
    <div id="services">
      <v-card height="300" color="#CCE5FF">
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
                    <v-btn x-large block color="#4DB6AC" >
                      Quiero saber más!
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <!--Tarjeta 2-->
              <v-flex>
                <v-card class="mx-auto" max-width="344" height="260">
                  <v-img
                    src="https://media.istockphoto.com/photos/coronavirus-picture-id1305856876?b=1&k=20&m=1305856876&s=170x170&h=GzXr7BF7Nork7Dl52Cwd5gcmTFUl2IUrf_ULACBShj8="
                    height="100px"
                  ></v-img>

                  <v-card-title> ¡Registrate aquí!</v-card-title>

                  <v-card-actions>
                    <v-btn x-large block color="#4DB6AC" @click="tablaregistro" >
                      Quiero saber más!
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
                    <v-btn x-large block color="#4DB6AC">
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
    tablaregistro(){
            console.log("Verificando credenciales");
            //Redirigir al registro
            this.$router.push('/tablaregistro');
        },
  }
};
</script>

<style>
#services {
  padding-top: 2%;
}
</style>
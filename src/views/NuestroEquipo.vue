<template>
  <v-container>
    <v-card color="#26A69A" flat class="text-center" >
      <h1 class="font-weight-black">¿Quiénes somos?</h1>
    </v-card>
    <v-card color="#CCE5FF" class="mx-auto" width="800" height="800">
      <div >
        <v-card class="mt-7 mb-12">
          <v-card-text>
            <v-container pa-1>
              <v-row no-gutters>
                <v-col cols="2">
                    <v-flex>
                     <v-card
                     class="pa-2"
            
                        max-width="344"
                    >
                        <v-img
                        src="https://avatars.githubusercontent.com/u/90367342?v=4"
                        height="200px"
                        ></v-img>

                        <v-card-title>
                        Julian Pinzon
                        </v-card-title>

                        <v-card-subtitle>
                        Estudiante Pograma Mision Tic 2022
                        </v-card-subtitle>

                        <v-card-actions>
            
                        <v-btn
                            icon
                            @click="show = !show"
                        >
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text text-align= justify>
                            Hola soy Julián Pinzón, soy estudiante de Pedagogía en la Escuela, Normal Superior de Charala, me gusta la programar, soy estudiante en formcion del programa Mision Tic 2022 en con venio con la UTP de Pereira. Soy bueno para desarrollar cosas con estática, tener algunas veces la iniciativa y divertirme en mis tiempos libres pasándola bien.
                            </v-card-text>
                        </div>
                        </v-expand-transition>
                    </v-card>
                    </v-flex>
                  <!--<v-card class="pa-2" > Column </v-card>-->
                </v-col>
                <v-col cols="2.5">
                  <v-card class="pa-2" > Column </v-card>
                </v-col>
                <v-col cols="2.5">
                  <v-card class="pa-2" > Column </v-card> </v-col
                ><v-col cols="2.5">
                  <v-card class="pa-2" > Column </v-card>
                </v-col>
                <v-col cols="2.5">
                  <v-card class="pa-2" > Column </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
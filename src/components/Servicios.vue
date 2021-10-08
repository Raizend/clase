<template>
    <v-container>
      <h2>Servicios</h2>
      <div id="services">
      
        <v-card height="450">
          <v-responsive :aspect-ratio="16/9">
          <v-card-text>
          <v-layout>
          
          <!--Tarjeta 1-->
              <v-flex>
                  <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="https://cdn.pixabay.com/photo/2021/01/10/07/41/syringe-5904302__340.jpg"
                    height="200px">
                  </v-img>

                  <v-card-title>
                    Registro
                  </v-card-title>

                  <v-card-subtitle>
                    Registro de animales
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      color="orange lighten-2"
                      text
                    >
                      Explorar
                    </v-btn>

                    <v-spacer></v-spacer>

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
                        Servicio de registro de procesamiento de vacunación, esterilización, con sistema para gestión de informes y avance de programas de salud pública con animales domésticos.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-flex>
              <!--Tarjeta 2-->
              <v-flex>
                <v-card
                  class="mx-auto"
                  max-width="344"
                >
                  <v-img
                    src="https://media.istockphoto.com/photos/coronavirus-picture-id1305856876?b=1&k=20&m=1305856876&s=170x170&h=GzXr7BF7Nork7Dl52Cwd5gcmTFUl2IUrf_ULACBShj8="
                    height="200px"
                  ></v-img>

                  <v-card-title>
                    Estadisticas
                  </v-card-title>

                  <v-card-subtitle>
                    Estadistica a Programas
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      color="orange lighten-2"
                      text
                    >
                      Explorar
                    </v-btn>

                    <v-spacer></v-spacer>

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

                      <v-card-text>
                        Sistema de registro estadístico de programas de salud pública para consulta y actualización de nuevos programas con animales domésticos.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-flex>
              <!--Tarjeta 3-->
              <v-flex>
                <v-card
                  class="mx-auto"
                  max-width="344"
                >
                  <v-img
                    src="https://media.istockphoto.com/photos/italian-identity-card-picture-id508488200?b=1&k=6&m=508488200&s=170667a&w=0&h=TyuIddnMXKmeXHL9nfDlO9tNBgFToRhtK8fYigdr12k="
                    height="200px"
                  ></v-img>

                  <v-card-title>
                    Documentos
                  </v-card-title>

                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      color="orange lighten-2"
                      text
                    >
                      Explorar
                    </v-btn>

                    <v-spacer></v-spacer>

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

                      <v-card-text>
                        Descargas de comprobantes de procedimiento e inscripción para la participación de los diferentes programas por parte de la Secretaria de Salud.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
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
}
</script>

<style>
#services{
  padding-top: 2%;
}
</style>
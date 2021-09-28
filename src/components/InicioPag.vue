<template>
  <v-container>
  <!--Plantilla Servicios-->
  <div id="servicios">
    
    <h2>Servicios</h2>
    <v-card class="services-section">
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
          
          <v-layout>
            <!--Tarjeta 1-->
            <v-flex>
              <v-card
                class="mx-auto"
                max-width="344"
              >
                <v-img
                  src="https://cdn.pixabay.com/photo/2021/01/10/07/41/syringe-5904302__340.jpg"
                  height="200px"
                ></v-img>

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
  
  <!--Plantilla Noticias-->
  <div>
    <h2>Noticias</h2>
    <v-card>
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
          
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>

        </v-card-text>
      </v-responsive>
    </v-card>
  </div>
  
  <!--Plantilla Equipo-->
  <div id="Team">
    <h2>Equipo</h2>
    <v-card class="team-section">
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
          
          <v-layout>
            <!--Tarjeta 1-->
            <v-flex>
              <v-card
                class="mx-auto"
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
                      Hola soy Julián Pinzón, soy estudiante de Pedagogía en la Escuela, Normal Superior de Charala, me gusta la programar, soy estudiante en formcion del programa Mision Tic 2022 en con venio con la UTP de Pereira. Soy bueno para desarrollar cosas con estática, tener algunas veces la iniciativa y divertirme en mis tiempos libres pasándola bien.
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
                  src="https://scontent.fclo9-1.fna.fbcdn.net/v/t1.18169-1/p200x200/29572264_10209444859279022_5718249205321465798_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Eg8n_q94oZAAX8Uuyqc&tn=ZXQGfaJcL2jO4bBX&_nc_ht=scontent.fclo9-1.fna&oh=ec0210512cc87c4c392fceae2a93048d&oe=616A246B"
                  height="200px"
                ></v-img>

                <v-card-title>
                  Mauricio Arango
                </v-card-title>

                <v-card-subtitle>
                  Estudiante Pograma Mision Tic 2022
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
                      Hola soy Mauricio Arango, soy de un pequeño y hermoso pueblo del norte del Valle del Cauca, tengo 20 años, estudiante de Ing.Mecatronica en la Universidad de Caldas estoy en mi noveno semestre. También de forma independiente soy tutor de las areas de matematicas y fisica. Espero llevar mi carrera y conocimientos de cursos en programación a otro nivel
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
                  src="https://avatars.githubusercontent.com/u/78944732?v=4"
                  height="200px"
                ></v-img>

                <v-card-title>
                  Vanessa Sosa
                </v-card-title>

                <v-card-subtitle>
                  Estudiante Pograma Mision Tic 2022
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
                      Mi nombre es Lexly Vanessa Sosa, soy de la ciudad de Bogotá, tengo 23 años y soy estudiante de Matemáticas en la universidad Distrital, me encuentro en mis dos últimos semestres del pregrado, trabajo de forma independiente como profesora particular de matemáticas.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-flex>
          </v-layout>

          <v-layout> 
            <!--Tarjeta 4-->
            <v-flex>
              <v-card
                class="mx-auto"
                max-width="344"
              >
                <v-img
                  src="https://scontent.fclo9-1.fna.fbcdn.net/v/t1.6435-1/p200x200/49812711_10158080041974046_2279722577192550400_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=R7zaPytlxRgAX97f8NK&_nc_oc=AQkmx6MzqQdV6WKGp_7X1ZpxY-bnDovCUszXm1PWU8utmGsQYEH3-6qp53MsKzaPGKo&_nc_ht=scontent.fclo9-1.fna&oh=a6c96eea9b289c6da8df99e51ceef9d6&oe=616CAC57"
                  height="200px"
                ></v-img>

                <v-card-title>
                  Ruben Conde
                </v-card-title>

                <v-card-subtitle>
                  Estudiante Pograma Mision Tic 2022
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
                      Hola mi nombre es RUBEN DARIO CONDE CARVAJAL soy de la ciudad de Ibagué, actualmente vivo aquí en Ibagué tengo estudios de ingeniería agroindustrial (no culminados noveno semestre), de cursos adicionales certificados no tengo ninguno, ya que soy un poco mas de ser autodidacta. Actualmente tengo una empresa la cual se dedica al suministro y fabricación de carpintería en madera casi todo lo relacionado con la madera (excepto muebles como camas, salas o comedores) los cuales se les suministra a urbanizadoras y pues publico en general.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-flex>
            <!--Tarjeta 5-->
            <v-flex>
              <v-card
                class="mx-auto"
                max-width="344"
              >
                <v-img
                  src="https://avatars.githubusercontent.com/u/90426063?v=4"
                  height="200px"
                ></v-img>

                <v-card-title>
                  Nelson Herrera
                </v-card-title>

                <v-card-subtitle>
                  Estudiante Pograma Mision Tic 2022
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
                      Mi nombre es Nelson Herrera Castro, soy de la ciudad de Cartagena, actualmente vivo en Mompós-Bolívar. Tengo estudios en ingeniería de sistemas, no culminados (VIII semestre), tengo cursos en diseño de páginas web con Macromedia Dreamweaver, ofimática, instalaciones eléctricas y en Salud y Seguridad en el Trabajo. Trabajo en el departamento de sistemas en una institución educativa del estado. A de más tengo mi propio negocio en Asesorías en Sistemas de Información e Instalaciones de Circuito Cerrado de TV..
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-flex>
          </v-layout>

        </v-card-text>
      </v-responsive>
    </v-card>
  </div>
  <!--Iinicio deñ Footer-->
    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <article>
          <v-card-text>
            <h3>Nosotros</h3>
            <p>+57 5 6900212 | + 57 5 6901112</p>
            <p>+57 3136224678 | +57 3153452877</p>
            <p>contactenos@mivacuna.com.co</p>
          </v-card-text>
          </article>
              <article>
              <v-img
                src="https://cdn-icons-png.flaticon.com/128/1076/1076928.png"
                width="60%" alaing= justify-center
              ></v-img>
              </article>
          <article>
          <strong class="subheading">¡Contactenos en nuestras redes sociales!</strong>
          <br>
          <img src="https://cdn-icons-png.flaticon.com/128/174/174879.png" alt="iconoWatsapp" width="30" height="30"><img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" alt="iconoface" width="30" height="30"><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="iconoInstagram" width="30" height="30"><img src="https://cdn-icons-png.flaticon.com/128/174/174876.png" alt="iconoTw" width="30" height="30">
          </article>
          
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Mision Tic</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <!--Fin deñ Footer-->

  </v-container>
</template>

<script>

  export default {
    
    data () {
      return {
        items: [
          {
            src: 'https://aristeguinoticias.com/editorial/wp-content/uploads/2021/03/vacuna-rusa-animales.jpg',
            
          },
          {
            src: 'https://www.eltelegrafo.com.ec/media/k2/items/cache/8ce250f1c8b420459a99c897b9fae3f9_XL.jpg',
          },
          {
            src: 'https://www.hogarmania.com/archivos/201609/perros-vacuna-rabia-1280x720x80xX.jpg',
          },
          
        ],
      
      }
      
    },
    

  }
  

</script>

<style>


</style>
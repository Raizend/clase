<template>
    <v-container>
        <v-divider></v-divider>
    <h2 id="titulo4">Conoce nuestro equipo de trabajo</h2>
    <v-divider></v-divider>
        <div id="team">
            
            <v-card color="#CCE5FF">
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
                            icon
                            @click="show = !show"
                        >
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text >
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
#team{
    padding-top: 2%;
}
#titulo4{
    color: #404040;
}
</style>
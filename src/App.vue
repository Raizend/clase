<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_960_720.jpg"
        fade-img-on-scroll
        
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title><h2>Control de Vacunación para Animales Domésticos</h2></v-toolbar-title>
        
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        
        <template v-slot:extension>
          <v-container>
            <v-row
                align="center"
                justify="end"
                margin
              >
              <v-btn icon @click="home">
                <v-icon x-large>mdi-home-account</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </template>
      </v-app-bar>
      <v-sheet
        
      >
        <v-container style="height: 250px;"></v-container>
      </v-sheet>
    </v-card>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

    methods: {
        home(){
            //Redirigir al home
            this.$router.push('/home');
        },
    }
};
</script>

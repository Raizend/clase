<template>
  <v-app>
    <v-card class="overflow-hidden" color="rgb(255, 0, 0, 0.2)">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://www.lawrenceburgvetclinic.com/assets/sub-banners/isolated-multiple-pet-banner.jpg"
        
        
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
        <!--gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"-->
        

        <v-toolbar-title id="titulo"><h1>Control de Vacunación <br> para Animales Domésticos</h1></v-toolbar-title>
        
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

<style>
#titulo{
color: whitesmoke;
}
</style>

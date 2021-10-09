<template>

<v-conteiner><v-div><v-divider></v-divider>
    <v-divider></v-divider><v-carousel id="carrusel" hide-delimiters cycle height="350px">
                    <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel></v-div></v-conteiner>
    
   
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
            src: 'https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
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
#carrusel{
  margin-top: 3rem;
  
}
</style>
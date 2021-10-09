<template>
    <v-container>
      <v-card color="#26A69A" flat class="text-center"> <h1 class="font-weight-black">Noticias</h1> </v-card>
        <div id ="news">
            <v-card height="550" color="#CCE5FF">
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
#news{
  padding-top: 2%;
}

</style>
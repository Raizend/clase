<template>
    <v-container>
        <v-footer
            dark
            padless id="footer">
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
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
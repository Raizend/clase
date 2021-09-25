<template>
    <v-card id="card-login" class="mx-auto" max-width="344">
    <v-card-text>
        <p class="text-h4 text--primary">LOGIN</p>
        <v-form>
        <v-text-field
            label="usuario"
            placeholder="usuario"
            outlined
        ></v-text-field>
        <v-text-field
            label="contraseña"
            placeholder="contraseña"
            outlined
            type="password"
        ></v-text-field>
        </v-form>
    </v-card-text>
    <v-card-actions>
        <v-btn text color="grey"> registrar </v-btn>
        <v-btn text color="black" @click="login"> iniciar sesión </v-btn>
        <v-btn text color="black" @click="consulta"> municipios </v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: ()=>{
        return{

        }
    },
    methods: {
        login() {
            console.log("verificando credenciales....");
            this.$router.push('/home');
        },
        consulta() {
            console.log("cargando municipios.......");
            this.$router.push('/colombia');            
        },

        
    },

};
</script>

<style>
#card-login{
    margin-top: 2rem;
}
</style>
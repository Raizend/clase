<template>
    <v-card id="card-login" style="color: blue" class="mx-auto" max-width="500">
    <v-card-text>
        <!--<h1 style="color: #00994c;">Ingresar</h1>-->
        <p class="text-h4 text--primary">Ingresar</p>
        <br>
        <v-form>
        <v-text-field
            label="Nombre de usuario"
            placeholder="Nombre de usuario o correo electrónico "
            outlined
        ></v-text-field>
        <v-text-field
            label="Contraseña"
            placeholder="Contraseña"
            outlined
            type = "password"
        ></v-text-field>
        </v-form>
    </v-card-text>
    <v-card-actions>
        <v-btn text color="blue" @click="login"> Iniciar Sesión </v-btn>
        <v-btn text color="black" @click="registro"> Regístrate </v-btn>
        <v-btn text color="black" @click="contrasenia"> Olvidé mi contraseña </v-btn>
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
        login(){
            console.log("Verificando credenciales");
            //Redirigir al home
            this.$router.push('/home');
        },
        registro(){
            console.log("Verificando credenciales");
            //Redirigir al registro
            this.$router.push('/registro');
        },
        contrasenia(){
            console.log("Verificando credenciales");
            //Redirigir al olvidé mi contraseña
            this.$router.push('/contrasenia');
        }
    }
};
</script>

<style>
#card-login{
    margin-top: 5rem;
    background: rgb(255, 255, 255);
    border-color: brown;
}
</style>
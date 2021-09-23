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
        ></v-text-field>
        </v-form>
    </v-card-text>
    <v-card-actions>
        <v-btn text color="grey"> registrar </v-btn>
        <v-btn text color="black"> iniciar sesión </v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
export default {};
</script>

<style>
#card-login{
    margin-top: 2rem;
}
</style>
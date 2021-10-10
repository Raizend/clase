<template>
    <v-container>
        <v-toolbar>
            <h2>Tabla de Registro de Veterinario</h2>
            <v-spacer></v-spacer>
            <v-btn elevation="6" rounded @click="formulario">
                <h3>Regresar al Formulario</h3>
            </v-btn>
        </v-toolbar>
        <!--Tabla-->
        <v-simple-table>
            <template v-slot:default>
            <!----Cabecera de la tabla---->
            <thead>
                <tr>
                    <th class="text-center">Nombres</th>
                    <th class="text-center">Apellidos</th>
                    <th class="text-center">Tipo_Doc</th>
                    <th class="text-center">Numero_Doc</th>
                    <th class="text-center">Teléfono</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Contraseña</th>
                    <th class="text-center">Confi_contraseña</th>
                    <th class="text-center">Aciones</th>
                </tr>
            </thead>
            <!-----Cuerpo de la tabla----->
            <tbody>
                <tr v-for="item in veterinarios" :key="item._id">
                <td>{{ item.nombres }}</td>
                <td>{{ item.apellidos }}</td>
                <td>{{ item.tipoDoc}}</td>
                <td>{{ item.numDoc}}</td>
                <td>{{ item.telefono }}</td>
                <td>{{ item.email}}</td>
                <td>{{ item.password}}</td>
                <td>{{ item.confiPass}}</td>
                <!----Columna de acciones--->
                <td>
                    <v-btn class="ma-2" outlined color="indigo">
                    Actualizar
                    </v-btn>
                    <v-btn class="ma-2" outlined color="error" v-on:click="eliminar(item._id)"><!---@click-->
                    Eliminar
                    </v-btn>
                </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>

import store from "../store/index.js";

export default {

    created: () => {
        
        //realiza solicitud get al backend
        store.dispatch("cargarVeterinarios");
        
    },

    //Propiedad Computada
    computed: {
        veterinarios: ()=>{
            return store.state.veterinarios;
        }


    },

    methods: {
    formulario() {
        //Redirigir al formulario
        this.$router.push("/mascota");
        },
    },

}
</script>

<style>

h2{
    color: #00994c;
}
h3{
    color: #00994c;
}

</style>
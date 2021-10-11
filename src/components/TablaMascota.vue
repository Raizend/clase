<template>
    <v-container>
        <v-toolbar >
            <h2>Tabla de Registro de Macotas</h2>
            <v-spacer></v-spacer>
            <v-btn elevation="6" rounded @click="formulario">
                <h3>Regresar al Formulario</h3>
            </v-btn>
        </v-toolbar>

        <!--Tabla-->
        <v-simple-table>
            <template v-slot:default>
            <!----Cabecera de la tabla---->
            <thead class="font-italic">
                <tr>
                    <th class="text-center">Veterinario</th>
                    <th class="text-center">Nombre Dueño</th>
                    <th class="text-center">Ident_Dueño</th>
                    <th class="text-center">Telefono</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Nombre Mascota</th>
                    <th class="text-center">Tipo_Mascota</th>
                    <th class="text-center">Genero</th>
                    <th class="text-center">Fecha_Vacuna</th>
                    <th class="text-center">Vacuna</th>

                </tr>
            </thead>
            <!-----Cuerpo de la tabla----->
            <tbody>
                <tr v-for="item in mascotas" :key="item._id">
                <td>{{ item.veterinario }}</td>
                <td>{{ item.nombreDueño }}</td>
                <td>{{ item.ident_dueño}}</td>
                <td>{{ item.tel_dueño}}</td>
                <td>{{ item.email_dueño }}</td>
                <td>{{ item.nombreMascota}}</td>
                <td>{{ item.tipo}}</td>
                <td>{{ item.genero}}</td>
                <td>{{ item.fecha_vacuna}}</td>
                <td>{{ item.vacuna}}</td>
                <!----Columna de acciones--->
                <td>
                    <v-btn class="ma-2" x-small outlined color="indigo">
                    Actualizar
                    </v-btn>
                    <v-btn class="ma-2" x-small outlined color="error" v-on:click="eliminar(item._id)"><!---@click-->
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
        store.dispatch("cargarMascotas");
        
    },

    //Propiedad Computada
    computed: {
        mascotas: ()=>{
            return store.state.mascotas;
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

thead{
    color: indigo;
}

</style>
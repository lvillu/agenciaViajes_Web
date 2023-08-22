<template>
    <div id="venta">
        <div class="container">
            <div class="card card-body mt-4">
                <form @submit.prevent="submit" class="row" >
                    <h1>Nueva venta</h1>
                    <p v-if="errorMessage" class="error-message text-danger mb-4">{{errorMessage}}</p>

                    <div class="mb-3 col-8">
                        <label for="venta" class="form-label">venta</label>
                        <input v-model="ventaDet.nombre" type="text" class="form-control" id="venta" placeholder="Nombre del venta">
                    </div>

                    <div class="mb-3 col-3">
                        <label for="siglas" class="form-label">Siglas</label>
                        <input v-model="ventaDet.siglas" type="text" class="form-control" id="siglas" placeholder="Siglas del venta">
                    </div>

                    <div class="mb-3 col-8">
                        <label for="nombreContacto" class="form-label">Nombre Contacto</label>
                        <input v-model="ventaDet.nombreContacto" type="text" class="form-control" id="nombreContacto" placeholder="Nombre del contacto del venta">
                    </div>

                    <div class="mb-3 col-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input v-model="ventaDet.telefono" type="tel" class="form-control" id="telefono" placeholder="Telefono">
                    </div>

                    <div class="mb-3 col-8">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="ventaDet.emailContacto" type="email" class="form-control" id="email" placeholder="Email">
                    </div>

                    <div class="mb-3 mt-4 col-3 d-sm-flex">
                        <button type="submit" class="btn btn-primary m-1 p-2">Guardar</button>
                        <button type="button" @click="Regresar" class="btn btn-primary m-1 p-2">Regresar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>


/* eslint-disable */

    import { reactive, ref } from "vue";

    const ventaDet = reactive({
        nombre: "",
        siglas: "",
        nombreContacto: "",
        telefono: "",
        emailContacto: ""
    })

</script>

<style lang="scss" scoped>

</style>
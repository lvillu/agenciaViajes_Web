<template>

    <div id="operador">
        <div class="container">
            <div class="card card-body mt-4">
                <form @submit.prevent="submit" class="row" >
                    <h1>Nuevo Operador</h1>
                    <p v-if="errorMessage" class="error-message text-danger mb-4">{{errorMessage}}</p>

                    <div class="mb-3 col-8">
                        <label for="operador" class="form-label">Operador</label>
                        <input v-model="operadorDet.nombre" type="text" class="form-control" id="operador" placeholder="Nombre del operador">
                    </div>

                    <div class="mb-3 col-3">
                        <label for="siglas" class="form-label">Siglas</label>
                        <input v-model="operadorDet.siglas" type="text" class="form-control" id="siglas" placeholder="Siglas del operador">
                    </div>

                    <div class="mb-3 col-8">
                        <label for="nombreContacto" class="form-label">Nombre Contacto</label>
                        <input v-model="operadorDet.nombreContacto" type="text" class="form-control" id="nombreContacto" placeholder="Nombre del contacto del operador">
                    </div>

                    <div class="mb-3 col-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input v-model="operadorDet.telefono" type="tel" class="form-control" id="telefono" placeholder="Telefono">
                    </div>

                    <div class="mb-3 col-8">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="operadorDet.emailContacto" type="email" class="form-control" id="email" placeholder="Email">
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

    import { useOperadorStore } from '../../stores/operador'
    import { reactive, ref } from "vue";
    import { useRouter } from "vue-router";

    const operadorStore = useOperadorStore();
    const router = useRouter();

    const operadorDet = reactive({
        nombre: "",
        siglas: "",
        nombreContacto: "",
        telefono: "",
        emailContacto: ""
    })

    const errorMessage = ref()

    async function submit(){
        await operadorStore.agregarOperador(operadorDet)
        .then( res => {
            router.replace({name : 'Operador'})
        }).catch( err => {
            errorMessage.value = err.message
            return errorMessage
        })
    }

    function Regresar(){
        router.replace({name : 'Operador'})
    }
    
    
</script>

<style lang="scss" scoped>

    .card-body{
        flex-direction: row;
    }

</style>
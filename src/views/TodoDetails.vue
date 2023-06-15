<template>
    <div>

    <h1>Edicion de Operador</h1>

    <hr>
    <input type="text" placeholder="Nombre del operador" v-model="state.nOperador">
    <br>
    <input type="text" placeholder="Siglas del operador" v-model="state.nSiglas">

    
    <br>
    <button @click="actualizarOperador()"> Actualizar Operador </button>
    <hr>

    </div>
</template>

<script>
    import operadorescrud from '../modules/operadorescrud';

    export default {
        setup() {
            const {actualizarOperador, state, operador, getOperador, operadorId} = operadorescrud();

            getOperador();

            return { 
                actualizarOperador, 
                getOperador,
                operador,
                operadorId,
                state
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
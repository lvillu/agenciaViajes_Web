<template>
  <div>
    <h1>Todos los operadores</h1>

    <button @click="agregarOperador()"> Nuevo Operador </button>
    <br>
    <input type="text" placeholder="Nombre del operador" v-model="state.nOperador">
    <br>
    <input type="text" placeholder="Siglas del operador" v-model="state.nSiglas">

    <div v-for="item in state.operadores" :key="item._id">
        <router-link :to="`/todo/${item._id}`">
        <h4>
            {{ item.nombre }}
        </h4>
        <h4>
            {{ item.siglas }}
        </h4>
        </router-link>
        <button @click="actualizarOperador(item._id)"> Actualizar Operador </button>
    </div>
  </div>
</template>

<script>
import operadorescrud from '../modules/operadorescrud'
import { onMounted } from 'vue';
export default {
    setup() {
        
        const { state, getAllOperadores, agregarOperador } = operadorescrud()

        onMounted(() => {
            getAllOperadores()
        })

        return { state, getAllOperadores, agregarOperador }
    }

}
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="about">
    <h1>Operadores</h1>

    <br />

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      @click="vistaDetalle()"
    >
      Agregar Operador
    </button>

    <br />

    <Suspense>
      <template #default>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Operador</th>
              <th scope="col">Nom. Contacto</th>
              <th scope="col">Email</th>
              <th scope="col">Telefono</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in operadores" :key="item._id">
              <td>{{ item.nombre }}</td>
              <td>{{ item.nombreContacto }}</td>
              <td>{{ item.emailContacto }}</td>
              <td>{{ item.telefono }}</td>
              <td>
                <button type="button" class="btn btn-primary" @click="vistaDetalle(item)">Modificar</button>
                &nbsp;
                <button type="button" class="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
      <template #fallback> Loading... </template>
    </Suspense>

    <br />

  </div>
</template>


<script setup>
/* eslint-disable */

import { useOperadorStore } from "../../stores/operador";
import { computed, onMounted } from "vue";

const operadorAuth = useOperadorStore();

const operadores = computed(() => {
  return operadorAuth.listaOperadores;
});

async function getOperadores() {
  await operadorAuth.obtenerOperadores();
}

function vistaDetalle(operador = {}){
  console.log("Operador", operador)
}


onMounted(async () => {
  await getOperadores();
});


</script>
<template>
  <div class="about">
    <h1>Operadores</h1>

    <br />

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="agregarOperador()"
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
                <button type="button" class="btn btn-primary" @click="modificarOperador(item._id)">Modificar</button>
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

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <Suspense>
              <template #default>
                <div v-if="operador" class="card card-body mt-4">
                  Operador Existente
                </div>
                <div v-else class="card card-body mt-4">
                  Nuevo Operador
                </div>
              </template>
              <template #fallback> Loading... </template>
            </Suspense>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
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

function modificarOperador(id){
  console.log("Id", id)
}

function agregarOperador(id){
  console.log("Nuevo")
}


onMounted(async () => {
  await getOperadores();
});
</script>
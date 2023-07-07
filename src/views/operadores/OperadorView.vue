<template>
  <div class="about">
    <h1>Operadores</h1>

    <br />
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#myModal"
      @click="mostrarModal"
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
                <button type="button" class="btn btn-primary">Modificar</button>
                &nbsp;
                <button type="button" class="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
      <template #fallback> Loading... </template>
    </Suspense>

    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the modal.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
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


onMounted(async () => {
  await getOperadores();
});
</script>
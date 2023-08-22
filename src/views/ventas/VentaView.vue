<template>
    <div class="about">
    <h1>Ventas</h1>

    <br />

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      @click="agregarVenta()"
    >
      Agregar Venta
    </button>

    <br />

    <Suspense>
      <template #default>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Titular</th>
              <th scope="col">Clave Reserva</th>
              <th scope="col">Operador</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Estatus</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in ventas" :key="item._id">
              <td>{{ item.titular }}</td>
              <td>{{ item.claveReserva }}</td>
              <td>{{ item.operador.nombre }}</td>
              <td>{{ item.detalleViaje.descripcionViaje }}</td>
              <td>{{ item.estatusVenta }}</td>
              <td>
                <button type="button" class="btn btn-primary" @click="vistaDetalle(item._id)">Detalles Venta</button>
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

import { useVentaStore } from "../../stores/venta";
import { computed, onMounted } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter()

const ventasAuth = useVentaStore();

const ventas = computed(() => {
  return ventasAuth.listaVentas;
});

async function getVentas() {
  await ventasAuth.obtenerVentas();
}

function vistaDetalle(id){
}

function agregarVenta(){
  router.push({ name: 'VentaNuevo'})
}

onMounted(async () => {
  await getVentas();
});

</script>

<style lang="scss" scoped>

</style>
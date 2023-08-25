<template>
    <div id="venta">
        <div class="container">
            <div class="card card-body mt-4">
                <form @submit.prevent="submit" class="row" >
                    <h1>Nueva venta</h1>
                    <p v-if="errorMessage" class="error-message text-danger mb-4">{{errorMessage}}</p>

                    <h3>Operador</h3>
                    <div class="mb-3 col-8">
                        <label for="operador" class="form-label">Operador</label>
                
                        <select v-model="ventaDet.operador.operadorId" class="form-select" aria-label="Default select example">
                            <option :value="0" selected>Selecciona un proveedor</option>
                            <option v-for="operador in operadores" :key="operador._id" :value="operador._id">
                                {{ operador.nombre }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-3 col-3">
                        <label for="claveReserva" class="form-label">Clave de Reserva</label>
                        <input v-model="ventaDet.telefono" type="text" class="form-control" id="claveReserva" placeholder="Clave de la Reserva">
                    </div>

                    <hr/>
                     <h3>Datos de la Reserva</h3>

                    <div class="mb-3 col-8">
                        <label for="titular" class="form-label">Titular</label>
                        <input v-model="ventaDet.titular" type="text" class="form-control" id="titular" placeholder="Nombre del titular">
                    </div>

                    <div class="mb-3 col-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input v-model="ventaDet.telefono" type="tel" class="form-control" id="telefono" placeholder="Telefono">
                    </div>

                    <div class="mb-3 col-6">
                        <label for="telefono" class="form-label">Email</label>
                        <input v-model="ventaDet.telefono" type="tel" class="form-control" id="telefono" placeholder="Email">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Fecha Limite</label>
                        <input v-model="ventaDet.telefono" type="tel" class="form-control" id="telefono" placeholder="Fecha Limite">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Total Venta</label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input v-model="ventaDet.totalVenta" 
                            @input="event => ventaDet.notaVenta.resto = event.target.value"
                            type="text" class="form-control" id="telefono" placeholder="Total Venta">
                        </div>
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Total Neto</label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input v-model="ventaDet.totalNeto" type="text" class="form-control" id="telefono" placeholder="Total Venta">
                        </div>
                    </div>

                    <div class="mb-3 col-4">
                    </div>

                    <div class="mb-3 col-4">
                         <input class="form-check-input" type="checkbox" v-model="ventaDet.ventaDls" id="chkVentadls">
                         <label for="chkVentadls" class="form-label">Venta Dls</label>
                    </div>

                    <div class="mb-3 col-8">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Fecha Viaje</label>
                        <VueDatePicker v-model="ventaDet.detalleViaje.fechaViaje" :enable-time-picker="false" />
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Hora Viaje</label>
                        <VueDatePicker v-model="ventaDet.detalleViaje.horaViaje" time-picker :is-24="false"/>
                    </div>

                    <div class="mb-3 col-4">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Fecha Regreso</label>
                        <VueDatePicker v-model="ventaDet.detalleViaje.fechaRegreso" :enable-time-picker="false" />
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Hora Regreso</label>
                        <VueDatePicker v-model="ventaDet.detalleViaje.horaRegreso" time-picker :is-24="false"/>
                    </div>

                    <div class="mb-3 col-6">
                        <label for="titular" class="form-label">Hotel</label>
                        <input v-model="ventaDet.titular" type="text" class="form-control" id="titular" placeholder="Hotel">
                    </div>

                    <div class="mb-3 col-6">
                    </div>

                    <div class="mb-3 col-10">
                        <label for="titular" class="form-label">Descripcion</label>
                        <textarea rows="4" v-model="ventaDet.titular" type="text" class="form-control" id="titular" placeholder="Descripcion"></textarea>
                    </div>

                    <div class="mb-3 col-4">
                         <input class="form-check-input" type="checkbox" v-model="ventaDet.detalleViaje.vuelosRedondos" id="flexCheckDefault">
                         <label for="flexCheckDefault" class="form-label">Vuelos Redondos</label>
                    </div>

                    <div class="mb-3 col-4">
                         <input class="form-check-input" type="checkbox" v-model="ventaDet.detalleViaje.vuelosRedondos" id="flexCheckDefault">
                         <label for="flexCheckDefault" class="form-label">Todo Incluido</label>
                    </div>

                    <div class="mb-3 col-4">
                         <input class="form-check-input" type="checkbox" v-model="ventaDet.detalleViaje.vuelosRedondos" id="flexCheckDefault">
                         <label for="flexCheckDefault" class="form-label">Traslados</label>
                    </div>

                    <hr/>
                     <h3>Pagos</h3>

                    <div class="mb-3 col-2">
                        <label for="nombreContacto" class="form-label">Folio</label>
                        <input v-model="ventaDet.nombreContacto" type="text" class="form-control" id="nombreContacto" placeholder="Folio de la venta">
                    </div>

                    <div class="mb-3 col-10">
                        <label for="titular" class="form-label">Concepto</label>
                        <textarea rows="4" v-model="ventaDet.titular" type="text" class="form-control" id="titular" placeholder="Descripcion"></textarea>
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Importe</label>
                        <input v-model="ventaDet.notaVenta.importe"
                            @input="event => ventaDet.notaVenta.importeMXN = event.target.value * ventaDet.notaVenta.tipoCambio" 
                            type="text" class="form-control" id="telefono" placeholder="Importe">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Tipo Cambio</label>
                        <input v-model="ventaDet.notaVenta.tipoCambio" type="tel" class="form-control" id="telefono" placeholder="Tipo Cambio" :disabled="!ventaDet.ventaDls">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Importe MXN</label>
                        <input v-model="ventaDet.notaVenta.importeMXN" type="tel" class="form-control" id="telefono" placeholder="Importe MXN" disabled>
                    </div>

                    <div class="mb-3 col-4">
                        <label for="telefono" class="form-label">Resto</label>
                        <input v-model="ventaDet.notaVenta.resto" type="tel" class="form-control" id="telefono" placeholder="Resto de la reserva" disabled>
                    </div>

                    <div class="mb-3 col-6">
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

    import { useOperadorStore } from "../../stores/operador";
    import { reactive, ref, computed, onMounted } from "vue";

    const ventaDet = reactive({
        operador: {
            operadorId:"0",
            nombre: ""
        },
        detalleViaje:{
            vuelosRedondos: false,
            fechaViaje: new Date(),
            horaViaje: {
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
            },
            fechaRegreso:new Date(),
            horaRegreso: {
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
            }
        },
        totalVenta: 0,
        totalNeto: 0,
        ventaDls: false,
        nombre: "",
        siglas: "",
        nombreContacto: "",
        telefono: "",
        emailContacto: "",
        notaVenta:{
            folio:"",
            concepto: "",
            importe: 0,
            tipoCambio: 1,
            importeMXN: 0,
            resto: 0
        }
    })


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

<style lang="scss" scoped>

</style>
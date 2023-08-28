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
                
                        <select v-model="venta.operador" class="form-select" aria-label="Default select example">
                            <option :value="0" selected>Selecciona un proveedor</option>
                            <option v-for="operador in operadores" :key="operador._id" :value="operador">
                                {{ operador.nombre }}
                            </option>
                        </select>
                    </div>

                    <div class="mb-3 col-3">
                        <label for="claveReserva" class="form-label">Clave de Reserva</label>
                        <input v-model="venta.claveReserva" type="text" class="form-control" id="claveReserva" placeholder="Clave de la Reserva">
                    </div>

                    <hr/>
                     <h3>Datos de la Reserva</h3>

                    <div class="mb-3 col-8">
                        <label for="titular" class="form-label">Titular</label>
                        <input v-model="venta.titular" type="text" class="form-control" id="titular" placeholder="Nombre del titular">
                    </div>

                    <div class="mb-3 col-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input v-model="venta.telefono" type="tel" class="form-control" id="telefono" placeholder="Telefono">
                    </div>

                    <div class="mb-3 col-6">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="venta.email" type="email" class="form-control" id="email" placeholder="Email">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="fechaLimite" class="form-label">Fecha Limite</label>
                        <VueDatePicker v-model="venta.fechaLimite" :enable-time-picker="false" id="fechaLimite"/>
                    </div>

                    <div class="mb-3 col-4">
                        <label for="totalVenta" class="form-label">Total Venta</label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input v-model="venta.totalVenta" 
                            @input="event => calcularResto(event.target.value, 'totalVenta')"
                            type="text" class="form-control" id="totalVenta" placeholder="Total Venta">
                        </div>
                    </div>

                    <div class="mb-3 col-4">
                        <label for="totalNeto" class="form-label">Total Neto</label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input v-model="venta.totalNeto" type="text" class="form-control" id="totalNeto" placeholder="Total Neto">
                        </div>
                    </div>

                    <div class="mb-3 col-4">
                    </div>

                    <div class="mb-3 col-4">
                         <input class="form-check-input" type="checkbox" v-model="venta.ventaDls" id="chkVentadls">
                         <label for="chkVentadls" class="form-label">Venta Dls</label>
                    </div>

                    <div class="mb-3 col-8">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="fechaViaje" class="form-label">Fecha Viaje</label>
                        <VueDatePicker id="fechaViaje" v-model="venta.detalleViaje.fechaViaje" :enable-time-picker="false" />
                    </div>

                    <div class="mb-3 col-4">
                        <label for="horaViaje" class="form-label">Hora Viaje</label>
                        <VueDatePicker id="horaViaje" v-model="venta.detalleViaje.horaViaje" time-picker :is-24="false"/>
                    </div>

                    <div class="mb-3 col-4">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="fechaRegreso" class="form-label">Fecha Regreso</label>
                        <VueDatePicker id="fechaRegreso" v-model="venta.detalleViaje.fechaRegreso" :enable-time-picker="false" />
                    </div>

                    <div class="mb-3 col-4">
                        <label for="horaRegreso" class="form-label">Hora Regreso</label>
                        <VueDatePicker id="horaRegreso" v-model="venta.detalleViaje.horaRegreso" time-picker :is-24="false"/>
                    </div>

                    <div class="mb-3 col-5">
                        <label for="hotel" class="form-label">Hotel</label>
                        <input v-model="venta.detalleViaje.hotel" type="text" class="form-control" id="hotel" placeholder="Hotel">
                    </div>

                    <div class="mb-3 col-5">
                        <label for="hotel" class="form-label">destino</label>
                        <input v-model="venta.detalleViaje.destino" type="text" class="form-control" id="hotel" placeholder="Destino">
                    </div>

                    <div class="mb-3 col-2">
                    </div>

                    <div class="mb-3 col-10">
                        <label for="descripcion" class="form-label">Descripcion</label>
                        <textarea rows="4" v-model="venta.detalleViaje.descripcionViaje" type="text" class="form-control" id="descripcion" placeholder="Descripcion"></textarea>
                    </div>

                    <div class="mb-3 col-4">
                         <input class="form-check-input" type="checkbox" v-model="venta.detalleViaje.vuelosRedondos" id="chkVuelosRedondos">
                         <label for="chkVuelosRedondos" class="form-label">Vuelos Redondos</label>
                    </div>

                    <div class="mb-3 col-4">
                         <input class="form-check-input" type="checkbox" v-model="venta.detalleViaje.todoIncluido" id="chkTodoIncluido">
                         <label for="chkTodoIncluido" class="form-label">Todo Incluido</label>
                    </div>

                    <div class="mb-3 col-4">
                         <input class="form-check-input" type="checkbox" v-model="venta.detalleViaje.traslados" id="chkTraslados">
                         <label for="chkTraslados" class="form-label">Traslados</label>
                    </div>

                    <hr/>
                     <h3>Pagos</h3>

                    <div class="mb-3 col-2">
                        <label for="folio" class="form-label">Folio</label>
                        <input v-model="venta.notaVenta.folio" type="text" class="form-control" id="folio" placeholder="Folio de la venta">
                    </div>

                    <div class="mb-3 col-10">
                        <label for="concepto" class="form-label">Concepto</label>
                        <textarea rows="4" v-model="venta.notaVenta.concepto" type="text" class="form-control" id="concepto" placeholder="Descripcion"></textarea>
                    </div>

                    <div class="mb-3 col-4">
                        <label for="importe" class="form-label">Importe</label>
                        <input v-model="venta.notaVenta.importe"
                            @input="event => calcularResto(event.target.value, 'importe')"
                            type="text" class="form-control" id="importe" placeholder="Importe">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="tipoCambio" class="form-label">Tipo Cambio</label>
                        <input v-model="venta.notaVenta.tipoCambio" 
                        @input="event => calcularImporteMXN(event.target.value)"
                        type="text" class="form-control" id="tipoCambio" placeholder="Tipo Cambio" :disabled="!venta.ventaDls">
                    </div>

                    <div class="mb-3 col-4">
                        <label for="importeMxn" class="form-label">Importe MXN</label>
                        <input v-model="venta.notaVenta.importeMXN" type="text" class="form-control" id="importeMxn" placeholder="Importe MXN" disabled>
                    </div>

                    <div class="mb-3 col-4">
                        <label for="resto" class="form-label">Resto</label>
                        <input v-model="venta.notaVenta.resto" type="text" class="form-control" id="resto" placeholder="Resto de la reserva" disabled>
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
    import { useVentaStore } from "../../stores/venta";
    import { reactive, ref, computed, onMounted } from "vue";
    import { useRouter } from "vue-router";

    const router = useRouter();
    const errorMessage = ref()

    const venta = reactive({
        operador: {
            operadorId:"0",
            nombre: ""
        },
        detalleViaje:{
            fechaViaje: new Date(),
            horaViaje: {
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
            },
            fechaRegreso:new Date(),
            horaRegreso: {
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
            },
            vuelosRedondos: false,
            hotel: "",
            destino: "",
            descripcionViaje: "",
            todoIncluido: false,
            traslados: false
        },
        titular: "",
        claveReserva: "",
        telefono: "",
        email: "",
        hotel: "",
        destino: "",
        descripcionViaje: "",
        totalVenta: 0,
        totalNeto: 0,
        fechaLimite: new Date(),
        ventaDls: false,
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
    const ventaAuth = useVentaStore();

    const operadores = computed(() => {
    return operadorAuth.listaOperadores;
    });

    async function getOperadores() {
        await operadorAuth.obtenerOperadores();
    }

    function calcularResto(value, nameValue){
        let totalVenta = nameValue === "totalVenta" ? value : venta.totalVenta;
        let importe = nameValue === "importe" ? value : venta.notaVenta.importe;

        if(venta.ventaDls)
            venta.notaVenta.resto = totalVenta - importe
        else{
            let importeMXN =  venta.notaVenta.importe * venta.notaVenta.tipoCambio;
            venta.notaVenta.importeMXN = importeMXN
            venta.notaVenta.resto = totalVenta - importeMXN
        }
    }

    function calcularImporteMXN(value) {
        venta.notaVenta.importeMXN = venta.notaVenta.importe * value
    }

    onMounted(async () => {
        await getOperadores();
    });

    function Regresar(){
        router.replace({name : 'Venta'})
    }

    async function submit(){
        await ventaAuth.agregarVenta(venta)
        .then( res => {
            router.replace({name : 'Venta'})
        }).catch( err => {
            errorMessage.value = err.message
            return errorMessage
        })
    }

</script>

<style lang="scss" scoped>

</style>
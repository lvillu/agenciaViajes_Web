import { defineStore } from 'pinia';
import { useApiPrivate} from '../composables/useApi';

export const useVentaStore = defineStore('venta', { 
    state: () => {
        return {
            venta: {},
            ventas: []
        }
    },
    getters: {
        detalleVenta: (state) => state.Venta,
        listaVentas: (state) => state.ventas
    },
    actions:{
        async obtenerVentas() {
            try {
                const { data } = await useApiPrivate().get('/v1/ventas/ventas');
                if (data.success){
                    let ventaObj = data.data
                    this.ventas = ventaObj;
                }
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
        async obtenerVenta(id) {
            try {
                const { data } = await useApiPrivate().get(`/v1/ventas/venta/${id}`);
                if (data.success){
                    let ventaObj = data.data
                    this.venta = ventaObj;
                }
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
        async agregarVenta(payload) {
            try {
                const { data } = await useApiPrivate().post('/v1/ventas/venta', payload);
                if (data.success){
                    let ventaObj = data.data
                    this.venta = ventaObj;
                }
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
        async actualizarVenta(id, payload) {
            try {
                const { data } = await useApiPrivate().put(`/v1/ventas/venta/${id}`, payload);
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
    }
});
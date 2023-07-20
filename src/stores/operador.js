import { defineStore } from 'pinia';
import { useApiPrivate} from '../composables/useApi';

export const useOperadorStore = defineStore('operador', {
    state: () => {
        return {
            operador: {},
            operadores: []
        };
    },
    getters: {
        detalleOperador: (state) => state.operador,
        listaOperadores: (state) => state.operadores
    },
    actions: {
        async obtenerOperadores() {
            try {
                const { data } = await useApiPrivate().get('/v1/operadores/operadores');
                if (data.success){
                    let operadorObj = data.data
                    this.operadores = operadorObj;
                }
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
        async obtenerOperador(id) {
            try {
                const { data } = await useApiPrivate().get(`/v1/operadores/operador/${id}`);
                if (data.success){
                    let operadorObj = data.data
                    this.operador = operadorObj;
                }
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
        async agregarOperador(payload) {
            try {
                const { data } = await useApiPrivate().post('/v1/operadores/operador', payload);
                if (data.success){
                    let operadorObj = data.data
                    this.operador = operadorObj;
                }
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
        async actualizarOperador(id, payload) {
            try {
                const { data } = await useApiPrivate().put(`/v1/operadores/operador/${id}`, payload);
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
    }
});
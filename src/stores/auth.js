import { defineStore } from 'pinia';
import useApi from '../composables/useApi';

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: {},
            accessToken: ""
        };
    },
    getters: {
        user: (state) => state.user,
        isAuthenticated: (state) => { var _a; return ((_a = state.user) === null || _a === void 0 ? void 0 : _a.id) ? true : false; }
    },
    actions: {
        async login(payload) {
            try {
                const { data } = await useApi().post('/v1/usuarios/login', payload);
                this.accessToken = data === null || data === void 0 ? void 0 : data.accessToken;
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
        async register(payload) {
            try {
                const { data } = await useApi().post('/v1/usuarios/registrar', payload);
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
        async getUser() {
            try {
                const { data } = await useApi().get('/v1/usuarios/usuario');
                this.user = data;
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
        async logout() {
            try {
                const { data } = await useApi().post('/v1/usuarios/logout');
                this.accessToken = "";
                this.user = {};
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        },
        async refresh() {
            try {
                const { data } = await useApi().post('/v1/usuarios/refresh');
                this.accessToken = data.accessToken;
                return data;
            }
            catch (error) {
                throw error.response.message;
            }
        }
    }
});
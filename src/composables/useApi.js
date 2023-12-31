import { useAuthStore } from "../stores/auth";
import { axiosInstance, axiosPrivateInstance } from "../utils/axios";
import { watchEffect } from "vue";

export function useApiPrivate() {
    const authStore = useAuthStore();
    watchEffect(() => {
        axiosPrivateInstance.interceptors.request.use((config) => {
            if (!config.headers["Authorization"]) {
                config.headers["Authorization"] = `Bearer ${authStore.accessToken}`;
            }
            return config;
        }, (error) => Promise.reject(error.message));
        axiosPrivateInstance.interceptors.response.use(response => response, async (error) => {
            var _a, _b;
            const prevRequest = error === null || error === void 0 ? void 0 : error.config;
            if ((((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 403 || ((_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status) === 401) && !prevRequest.sent) {
                prevRequest.sent = true;
                await authStore.refresh();
                prevRequest.headers["Authorization"] = authStore.accessToken;
                return axiosPrivateInstance(prevRequest);
            }
            return Promise.reject(error);
        });
    });
    return axiosPrivateInstance;
}

export function useApi(){
    return axiosInstance
}
<template>
    <h1>Detalle Operador</h1>

    <div id="operador">
        <div class="container">
            <Suspense>
                <template #default>
                    <div v-if="operador" class="card card-body mt-4">
                        <h5 class="card-title">Operador: {{operador.nombre}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Email: {{operador.emailContacto}}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Nombre contacto: {{operador.nombreContacto}}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Telefono: {{operador.telefono}}</h6>
                    </div>
                </template>
                <template #fallback>
                    Loading...
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script setup>

    /* eslint-disable */
    import { useOperadorStore } from "../../stores/operador";
    import { computed, onMounted } from "vue";
    import { useRouter, useRoute } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const operadorId = computed( () => route.params.id);

    onMounted(async () => {
        await getOperador();
    });

    const operadorAuth = useOperadorStore();

    const operador = computed(() => {
        return operadorAuth.operador
    });

    async function getOperador() {
        await operadorAuth.obtenerOperador(operadorId.value);
    }

    
</script>

<style lang="scss" scoped>

</style>
<template>
    <div id="user">
        <div class="container">
            <Suspense>
                <template #default>
                    <div v-if="user" class="card card-body mt-4">
                        <h5 class="card-title">Username: {{user.username}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Email: {{user.email}}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">First Name: {{user.nombre}}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Last Name: {{user.apPaterno}} {{ user.apMaterno }}</h6>
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

    // @ts-ignore
    import {useAuthStore} from '../../stores/auth'
    import { computed, onMounted } from "vue";

    const authStore = useAuthStore()

    const user = computed(() => {
        return authStore.userDetail
    })

    async function getUser(){
        await authStore.getUser()
    }

    onMounted( async() =>{
        await getUser()
    })

</script>

<style lang="scss" scoped>

    #user .card{
        max-width: 40vw;
        margin: auto;
    }

</style>
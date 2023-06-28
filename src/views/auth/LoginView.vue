<template>
    <div id="login">
        <div class="container">
            <div class="card card-body mt-4">
                <h5 class="card-title">Login</h5>
                <form @submit.prevent="loginFunc">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" v-model="loginData.email" class="form-control" id="email" autocomplete="off">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" v-model="loginData.password" class="form-control" id="password">
                    </div>
                    <button type="submit" class="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>

/* eslint-disable */

    // @ts-ignore
    import {useAuthStore} from '../../stores/auth'
    import { reactive, ref } from "vue";
    import { useRouter } from 'vue-router';

    const authStore = useAuthStore()
    const router = useRouter()


    const loginData = reactive({
        email: "",
        password: "",
    })

    const errorMessage = ref()

    async function loginFunc(){
        console.log("Hola", loginData)
        await authStore.login(loginData)
        .then( res => {
            router.replace({name : 'user'})
        }).catch( err => {
            errorMessage.value = err.message
            return errorMessage
        })
        
    }
</script>

<style lang="scss" scoped>

    #login .card{
        max-width: 40vw;
        margin: auto;
    }

</style>
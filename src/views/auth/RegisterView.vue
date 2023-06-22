<template>
    <div id="register">
        <div class="container">
            <div class="card card-body mt-4">
                <form @submit.prevent="submit">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input v-model="registerData.username" type="text" class="form-control" id="username">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input v-model="registerData.email" type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="registerData.password" type="password" class="form-control" id="password">
                    </div>
                     <div class="mb-3">
                        <label for="passwordConfirm" class="form-label">Password</label>
                        <input v-model="registerData.passwordConfirm" type="password" class="form-control" id="passwordConfirm">
                    </div>
                    <button type="submit" class="btn btn-success">Register</button>
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


    const registerData = reactive({
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })


    const errorMessage = ref()

    async function submit(){
        console.log(registerData)
        /*authStore.register(registerData)
        .then( res => {
            router.replace({name : 'Login'})
            console.log("Res", res)
        }).catch( err => {
            errorMessage.value = err.message
            return errorMessage
        })
        */
    }
</script>


<style lang="scss" scoped>

    #register .card{
        max-width: 40vw;
        margin: auto;
    }

</style>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const getOperadores = () => {

    const route = useRoute();
    const router = useRouter();
    const operadorId = computed( () => route.params._id);

    const state = ref({
        nOperador: '',
        nSiglas: '',
        operadores: {}
    })

    const getAllOperadores = async () => {
        try {
            await fetch("http://localhost:9005/api/v1/operadores/operadores")
                .then(res => res.json())
                .then(data => {
                    state.value.operadores = data.data
                })
        } catch (err) {
            console.log(err);
        }
    }

    const operador = ref({});
    const getOperador = async () => {
        try {
            await fetch("http://localhost:9005/api/v1/operadores/operador/"+operadorId.value)
                .then(res => res.json())
                .then(data => {
                    operador.value = data.data
                })
        } catch (err) {
            console.log(err);
        }
    }

    const agregarOperador = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                nombre :  state.value.nOperador, siglas: state.value.nSiglas
            })
        };

        try {
            await fetch("http://localhost:9005/api/v1/operadores/operador", options)
                .then(res => res.json())
                .then(data => {
                    state.value.operadores = data.data
                })
        } catch (err) {
            console.log(err);
        }
    }

    const actualizarOperador = async () => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                nombre :  state.value.nOperador, siglas: state.value.nSiglas
            })
        };
        try {
            await fetch("http://localhost:9005/api/v1/operadores/operador/" + operadorId.value, options)
                .then(res => res.body)
                .then(res => {
                    console.log("Funciono", res)
                })
                router.push("/todos")
        } catch (err) {
            console.log(err);
        }
    }

    return { 
        state, 
        operador,
        getOperador,
        getAllOperadores,
        agregarOperador,
        actualizarOperador
    }
}

export default getOperadores
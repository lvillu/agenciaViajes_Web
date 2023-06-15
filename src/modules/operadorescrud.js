import { ref } from 'vue';

const getOperadores = () => {
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

    const actualizarOperador = async (id) => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                nombre : "Prueba", siglas: "TEST"
            })
        };
        try {
            await fetch("http://localhost:9005/api/v1/operadores/operador/" + id, options)
                .then(res => res.json())
                .then(data => {
                    state.value.operadores = data.data
                })
        } catch (err) {
            console.log(err);
        }
    }

    return { 
        state, 
        getAllOperadores,
        agregarOperador,
        actualizarOperador
    }
}

export default getOperadores
Vue.component('form-personal', {
    data: () => {
        return {
            // Va a retornar todo lo que el usuario cargue en el form
            form_data: {
                nombre:"",
                apellido:"",
                localidad:"",
                sexo:"",
            },
            mostrar_form: false,
        
            // Variable para almacenar el localStorage
        storage:[]
        }
    },

    template:`<div class='form'>
    <form v-on:submit.prevent novalidate>
        <div>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" v-model="form_data.nombre">
        </div>

        <div>
            <label for="apellido">Apellido</label>
            <input type="text" name="apellido" id="apellido" v-model="form_data.apellido">
        </div>

        <div>
            <label for="localidad">Localidad</label>
            <input type="text" name="localidad" id="localidad" v-model="form_data.localidad">
        </div>

        <div>
            <label for="masculino">Masculino</label>
            <input type="radio" id="masculino" value="H" v-model="form_data.sexo">
            <label for="femenino">Femenino</label>
            <input type="radio" id="femenino" value="M" v-model="form_data.sexo">
        </div>

        <div>
            <button type="submit" @click="enviar(mostrar_form = true)">Iniciar</button>
        </div>
    </form>

    <cuestionario v-if="mostrar_form == true" @marca="recibe(mostrar_form=$event)" v-bind:mostrar_form="mostrar_form"/>

    </div>
    `,

    methods:{
        guardar:function(form_data){
            console.log("Enviado")
            
            //Pregunto si tengo algo en el Storage, sino lo creo

            if(!localStorage.getItem('datos')) {
                storage = [];
            } 
            
            else {
                storage = JSON.parse(localStorage.getItem("datos"));
            }

            // Guardo en el Local
            storage.push(form_data);
            localStorage.setItem("datos", JSON.stringify(storage));
        },

        enviar:function(){
            this.$emit('marca',this.mostrar_form)
        }

    },

    destroyed: function(){
        console.log("Instancia de component form, destruida")
    }   
});

/* 
            if(!localStorage.getItem('datos')) {
                storage = [];
            } 
            
            else {
                storage = JSON.parse(localStorage.getItem("datos"));
            }

            // Guardo en el Local
            storage.push(form_data);
            localStorage.setItem("datos", JSON.stringify(storage));     
*/

//<button type="submit" @click="guardar(form_data)" value="Guardar">Iniciar</button>
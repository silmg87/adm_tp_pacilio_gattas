Vue.component('cuestionario', {
    data: () => {
        return {
            // Va a almacenar todos los valores de las respuestas
            rta_preguntas: {
                pregunta_1: "",
                pregunta_2: "",
                pregunta_3: "",
                pregunta_4: "",
                pregunta_5: "",
            }

            // Va a retornar el tipo de yoga segun la data que paso el user
        }
    },

    //Va a recibir toda la data del form para poder hacer render
    props:["mostrar_form", "preguntas"],

    template: `
            <div>
                
            <div>hola </div>
                
            </div>


            <div>
                <button type="submit" @click="redirect()">Ver Resultado</button>
            </div>

            </div>`,

    methods: {
        redirect:function(){
        //Redirigir al resultado
            this.$router.push('/resultado');
        },

        recibe:function(mostrar_form){

        }
    },

    destroyed: function(){
        console.log("Instancia de component cuestionario, destruida")
    }  
});



/* 
    1) Declarar el Array de preguntas
    2) Recorrerlo con v-for
    3) Hacer un v-if consultando el value, y en base a eso dejar avanzar o no
    4)

*/
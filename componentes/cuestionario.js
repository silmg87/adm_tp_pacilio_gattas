Vue.component('cuestionario', {
    data: () => {
        return {

            preguntas: [
                {
                    id:'Pregunta 1',
                    pregunta: '¿Con qué frecuencia realizas actividad física?',
                    respuesta1: 'No realizo ninguna actividad',
                    respuesta2: 'Más de 3 veces por semana',
                    respuesta3: 'Muy poco, 1 o 2 veces por semana',
                    imagen:'../imgs/yoga1.jpg',
                    alt: 'Mujer practicando yoga'
                },
                {
                    id:'Pregunta 2',
                    pregunta: '¿Has practicado yoga alguna vez?',
                    respuesta1: 'No, nunca practique',
                    respuesta2: 'Sí, con frecuencia',
                    respuesta3: 'Alguna vez, realice pero no recuerdo',
                    imagen:'../imgs/yoga2.jpg',
                    alt: 'Mujer practicando yoga'
                },
                {
                    id:'Pregunta 3',
                    pregunta: '¿Te consideras una persona activa?',
                    respuesta1: 'Me adapto a las situaciones',
                    respuesta2: 'No, me gusta el sedentarismo',
                    respuesta3: 'Sí, siempre estoy en movimiento',
                    imagen:'../imgs/yoga3.jpg',
                    alt: 'Mujer practicando yoga'
                },
                {
                    id:'Pregunta 4',
                    pregunta: '¿Sos de realizar meditaciones?',
                    respuesta1: 'No, nunca realice',
                    respuesta2: 'Alguna vez pero me cuesta concentrarme',
                    respuesta3: 'Sí, me ayuda a conectar con mi yo interno',
                    imagen:'../imgs/yoga4.jpg',
                    alt: 'Mujer practicando yoga'
                },
                {
                    id:'Pregunta 5',
                    pregunta: '¿Qué resultados deseas obtener a través del yoga?',
                    respuesta1: 'Respiración y una correcta postura',
                    respuesta2: 'Flexibilidad, concentración y mantenerme en forma',
                    respuesta3: 'Relajación y trabajar de manera profunda la conexión de cuerpo, corazón y mente',
                    imagen:'../imgs/yoga1.jpg',
                    alt: 'Mujer practicando yoga'
                }
            ],
            
            // Va a amacenar todos los valores de las respuestas
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
    props:["mostrar_form", "id", "pregunta", "respuesta1", "respuesta2", "respuesta3", "imagen", "alt"],

    template: `
            <!-- <div>
                <div class="preguntas">
                    <div>
                        <p>¿Con qué frecuencia realizas actividad física?</p>
                        <form v-on:submit.prevent novalidate>
                            <button @click="siguientePregunta()">No realizo ninguna actividad</button>
                            <button @click="siguientePregunta()">Más de 3 veces por semana</button>
                            <button @click="siguientePregunta()">Muy poco, 1 o 2 veces por semana</button>
                        </form>
                    </div>
                    <div>
                        <img src="../imgs/yoga1.jpg" alt="Mujer practicando yoga">
                    </div>
                </div>
                
                <div>
                    <button type="submit" @click="redirect()">Ver Resultado</button>
                </div>
            </div> -->
            
            <div>
                <div class="preguntas" v-for="item of preguntas">
                    <div>
                        <p>{{item.pregunta}}</p>
                        <form v-on:submit.prevent novalidate>
                            <button @click="siguientePregunta()">{{item.respuesta1}}</button>
                            <button @click="siguientePregunta()">{{item.respuesta2}}</button>
                            <button @click="siguientePregunta()">{{item.respuesta3}}</button>
                        </form>
                    </div>
                    <div>
                        <img :src="item.imagen" :alt="item.alt">
                    </div>
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
            
        },

        siguientePregunta:function(){
            for (let item of this.preguntas) {
                let div = document.querySelector('.preguntas');
                div.innerHTML = `
                    <div>
                        <p>${item.pregunta}</p>
                        <form v-on:submit.prevent novalidate>
                            <button @click="siguientePregunta()">${item.respuesta1}</button>
                            <button @click="siguientePregunta()">${item.respuesta2}</button>
                            <button @click="siguientePregunta()">${item.respuesta3}</button>
                        </form>
                    </div>
                    <div>
                        <img src="${item.imagen}" alt="${item.alt}">
                    </div>`;
            }
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
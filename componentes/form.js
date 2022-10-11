Vue.component('form-personal', {
    data: () => {
        return {
            // Va a retornar todo lo que el usuario cargue en el form
            form_data: {
                ver: true,
                nombre:"",
                apellido:"",
                localidad:"",
                sexo:"",
            },

            //Errores a validar
            errores:[],
            enviado: false,

            //Visibilidad del form
            mostrar_preguntas : false,

            // Variable para almacenar el localStorage
            storage:[],

            //Preguntas
            preguntas:[
                {
                    id:'Pregunta 1',
                    pregunta: '¿Con qué frecuencia realizas actividad física?',
                    opciones: [
                        'No realizo ninguna actividad',
                        'Más de 3 veces por semana',
                        'Muy poco, 1 o 2 veces por semana'
                    ],
                    imagen:'../imgs/yoga1.jpg',
                    alt: 'Mujer practicando yoga',
                    puntos: 0
                },
                {
                    id:'Pregunta 2',
                    pregunta: '¿Has practicado yoga alguna vez?',
                    opciones: [
                        'No, nunca practique',
                        'Sí, con frecuencia',
                        'Alguna vez, realice pero no recuerdo',
                    ],
                    imagen:'../imgs/yoga2.jpg',
                    alt: 'Mujer practicando yoga',
                    puntos: 0
                },
                {
                    id:'Pregunta 3',
                    pregunta: '¿Te consideras una persona activa?',
                    opciones: [
                        'Me adapto a las situaciones',
                        'No, me gusta el sedentarismo',
                        'Sí, siempre estoy en movimiento',
                    ],
                    imagen:'../imgs/yoga3.jpg',
                    alt: 'Mujer practicando yoga',
                    puntos: 0
                },
                {
                    id:'Pregunta 4',
                    pregunta: '¿Sos de realizar meditaciones?',
                    opciones: [
                        'No, nunca realice',
                        'Alguna vez pero me cuesta concentrarme',
                        'Sí, me ayuda a conectar con mi yo interno',
                    ],
                    imagen:'../imgs/yoga4.jpg',
                    alt: 'Mujer practicando yoga',
                    puntos: 0
                },
                {
                    id:'Pregunta 5',
                    pregunta: '¿Qué resultados deseas obtener a través del yoga?',
                    opciones: [
                        'Respiración y una correcta postura',
                        'Flexibilidad, concentración y mantenerme en forma',
                        'Relajación y trabajar de manera profunda la conexión de cuerpo, corazón y mente'
                    ],
                    imagen:'../imgs/yoga1.jpg',
                    alt: 'Mujer practicando yoga',
                    puntos: 0
                }
            ],
        }
    },

    template:`<div class='form'>
    <form @submit.prevent novalidate class="w-50 mx-auto text-center" v-show="form_data.ver">
        <div>
            <label class="mt-3" for="nombre">Nombre</label>
            <input class="form-control w-50 mx-auto my-2" type="text" name="nombre" id="nombre" v-model="form_data.nombre">
        </div>

        <div>
            <label for="apellido">Apellido</label>
            <input class="form-control w-50 mx-auto my-2" type="text" name="apellido" id="apellido" v-model="form_data.apellido">
        </div>

        <div>
            <label for="localidad">Localidad</label>
            <input class="form-control w-50 mx-auto my-2" type="text" name="localidad" id="localidad" v-model="form_data.localidad">
        </div>

        <div>
            <label for="masculino">Masculino</label>
            <input class="mx-2" type="radio" id="masculino" value="Masculino" v-model="form_data.sexo">
            <label for="femenino">Femenino</label>
            <input class="mx-2" type="radio" id="femenino" value="Femenino" v-model="form_data.sexo">
        </div>

        <div>
            <button class="boton" type="submit" @click="iniciar">Iniciar</button>
        </div>
    </form>

    <div v-if="enviado === true">
        <div>
            <ul>
                <li v-for="error in errores">{{error}}</li>
            </ul>
        </div>
    </div>

    <cuestionario
                v-if="mostrar_preguntas"
                v-for="item in preguntas"
                    :key="item.id"
                    :id="item.id"
                    :pregunta="item.pregunta"
                    :opciones="item.opciones"
                    :imagen="item.imagen"
                    :alt="item.alt"
                    :puntos="item.puntos"
                    @puntitos="recibePuntaje">
    </cuestionario>

    <div class="text-center" v-if="mostrar_preguntas">
        <button class="boton" type="submit" @click="redirect(), guardar(form_data)">Ver Resultado</button>
    </div>
    </div>
    `,

    methods:{
        guardar:function(form_data){
            
            // Guardo en el Local
            this.storage.push(form_data);
            localStorage.setItem("datos", JSON.stringify(this.storage));
            console.log(this.storage)
        },

        redirect:function(){
            //Redirigir al resultado
                this.$router.push('/resultado');
        },

        iniciar:function(){

            this.enviado = true
            this.errores = []
            
            this.mostrar_preguntas = true
            this.form_data.ver = false
        },

        recibePuntaje:function(punto){
            this.puntos = punto
        }
    },

    destroyed: function(){
        console.log("Instancia de component form, destruida")
    }   
});

/* 

    <resultado-yoga
                        v-for="item in this.storage"
                        :key="0"
                        :nombre="item.nombre"
                        :apellido="item.apellido"
                        :localidad="item.localidad"
                        :sexo="item.sexo">
    </resultado-yoga>


    iniciar:function(){

            this.enviado = true
            this.errores = []

        /// Validacion de errores
        
            if(!this.form_data.nombre){
                this.errores.push('El nombre no puede estar vacio')
            }

            if(!this.form_data.apellido){
                this.errores.push('El apellido no puede estar vacio')
            }

            if(!this.form_data.localidad){
                this.errores.push('La localidad no puede estar vacia')
            }

            if(!this.form_data.sexo){
                this.errores.push('Debe seleccionar su sexo')
            }

            if(this.errores.length == 0) {
                console.log('Entre')
                this.mostrar_preguntas = true
                this.form_data.ver = false
            }
        }


*/
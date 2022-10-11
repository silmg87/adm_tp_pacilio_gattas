Vue.component('resultado-yoga', {
    data: () => {
        return {
            // Va a retornar el tipo de yoga segun la data que paso el user
        yogas: [
                // Aca pasamos como objeto, los 3 o 4 tipos de yogas 
                {   
                    id: 1, 
                    titulo: 'Hatha Yoga',
                    descripcion:'Descripción Yoga',
                    caracteristicas: 'El Hatha yoga es una tipología indicada para todo el mundo, más aún si practicas yoga para principiantes, ya que no requiere muchos conocimientos o experiencia previa. No quiere decir necesariamente que sea el tipo de yoga más fácil, pero el hecho de ser más pausado lo hace más accesible. Las clases de Hatha yoga se centran en un buen alineamiento del cuerpo. Y el profesor te puede explicar cada postura con detalle, guiándote a lo largo de la clase. Si eres principiante, recuerda que siempre puedes adaptar la práctica a tu nivel de yoga. Lo importante es que has dado el paso de estar ahí, no debes centrarte en alcanzar la postura perfecta. Se trata, sobre todo, de hacerlo lo mejor que puedas escuchando cómo responde tu cuerpo. No dudes en tomarte un descanso cuando lo necesites y simplemente respirar o quedarte en la posición del niño hasta que estés listo para continuar',
                    beneficios: '',
                    img:'../../imgs/hatha-1.jpg',
                    alt:'Mujer practicando la postura',
                    video: 'https://www.youtube.com/embed/AGjOuaFCQrg',
                    rtas: ''
                },
                {   
                    id: 2, 
                    titulo: 'Vinyasa Yoga',
                    descripcion:'Descripción Yoga 2',
                    caracteristicas: '',
                    beneficios: '',
                    img:'../../imgs/hatha-2.jpg',
                    alt:'Mujer practicando la postura',
                    video: 'https://www.youtube.com/embed/ORZqGpZguD0',
                    rtas: ''
                },
                {   
                    id: 3, 
                    titulo:'Yin Yoga',
                    descripcion:'Descripción Yoga 3',
                    caracteristicas: '',
                    beneficios: '',
                    img:'../../imgs/hatha-3.jpg',
                    alt:'Mujer practicando la postura',
                    video: 'https://www.youtube.com/embed/yMCOQdpoVE8',
                    rtas: ''
                },
        ],

        // Variable para almacenar el localStorage
        storage:[],
    }
},

    template: `
            <div>
                <div>
                    <ul v-for="item in storage">
                        <li>{{item.nombre}}</li>
                        <li>{{item.apellido}}</li>
                        <li>{{item.localidad}}</li>
                        <li>{{item.sexo}}</li>
                    </ul>
                </div>

                <div v-for="i in yogas">
                    <h2>{{i.titulo}}</h2>
                    <p>{{i.descripcion}}</p>
                    <p>{{i.caracteristicas}}</p>
                    <p>{{i.beneficios}}</p>
                    <img :src="i.img" :alt="i.alt"/>
                    <div>
                    <iframe width="560" height="315" :src="i.video" title="YouTube video player" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
    `,

    methods:{

    },

    beforeMount: function() {
            if(!localStorage.datos) {
                console.log('Debes completar el form primero')
            } 
            
            else {
                console.log('Datos existentes')
            }
    },

    mounted () {
        this.storage = JSON.parse(localStorage.getItem('datos')) 
        
    },

    destroyed: function(){
        console.log("Instancia de component resultado, destruida")
    } 
});


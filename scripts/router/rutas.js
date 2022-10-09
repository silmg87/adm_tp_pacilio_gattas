const home = { template: `
                <div class='home'>
                <h1>Namaste</h1>
                <p>Conocé tu Yoga ideal</p>
                <p>
                    Nuestros expertos han desarrollado un breve cuestionario para ti y tu cuerpo, para poder comprenderte y conectarte con tú yo interior.
                </p>
                <p>¿Te animas?</p>
                <router-link to="/form" exact>Hacer el test</router-link>
            </div>
            `,
    name:'component-home' 
}

const form = { template: `<form-personal></form-personal>`, name:"formulario" };

const resultado = { template: `<resultado-yoga></resultado-yoga>`, name:"resultado" };

// Definir el "mapeo" de rutas - Asociacion de X ruta con X componente.

const routes = [
    { path: '/', component: home },
    { path: '/form', component: form },
    { path: '/resultado', component: resultado },
    { path: '*', redirect: '/' }
];


// Instanciamos el Router con las routes.
const router = new VueRouter({
	routes
});

// Instanciamos VUE
const app = new Vue({
	el:"#app",

    router,

    data: {
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
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AGjOuaFCQrg" title="YouTube video player" allowfullscreen></iframe>',
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
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ORZqGpZguD0" title="YouTube video player" allowfullscreen></iframe>',
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
                video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yMCOQdpoVE8" title="YouTube video player" allowfullscreen></iframe>',
                rtas: ''
            },
        ],
    }
});

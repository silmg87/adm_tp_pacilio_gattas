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
});

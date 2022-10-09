Vue.component('resultado-yoga', {
    data: () => {
        return {
            // Va a retornar el tipo de yoga segun la data que paso el user
        }
    },

    props:[
        //Va a recibir toda la data del form para poder hacer render
        "nombre",
        "apellido",
        "localidad",
        "sexo",
        "id", 
        "titulo",
        "descripcion",
        "caracteristicas",
        "beneficios",
        "img",
        "alt",
        "video",
        "rtas"
    ],

    template: `
            <div>
                <div v-for="x in datos">
                    <ul>
                        <li>{{x.nombre}}</li>
                        <li>{{x.apellido}}</li>
                        <li>{{x.localidad}}</li>
                        <li>{{x.sexo}}</li>
                    </ul>
                </div>

                <div v-for="i in yogas">
                    <h2>{{i.titulo}}</h2>
                    <p>{{i.descripcion}}</p>
                    <p>{{i.caracteristicas}}</p>
                    <p>{{i.beneficios}}</p>
                    <img src="i.img" alt="i.alt"/>
                    <div>{{i.video}}</div>
                </div>
            </div>
    `,

    methods: {
        
    }
});
Vue.component('cuestionario', {
    data: () => {
        return {
            puntaje: 0,
            activo: true,
        }
    },

    //Se le pasa por props todo lo del array de preguntas del padre
    props:["id", "pregunta", "opciones", "imagen", "alt", "punto"],

    template: `
            <div>
                <div class="preguntas" v-if="activo">
                    <div :id="id">
                        <p>{{pregunta}}</p>

                        <form @submit.prevent novalidate>
                    
                        <button type="button" value="1" @click="sumarValue">{{opciones[0]}}</button>
                        <button type="button" value="2" @click="sumarValue">{{opciones[1]}}</button>
                        <button type="button" value="3" @click="sumarValue">{{opciones[2]}}</button>
                        
                        </form>

                    </div> 
                    <div>
                        <img :src="imagen" :alt="alt">
                    </div>
                </div>
            </div>`,

    methods: {
        sumarValue:function(e){
            this.activo = false;
            this.value = e.target.value;
            this.puntaje = parseInt(this.value); 

            //this.punto = this.puntaje
            let data = {
                id: this.id,
                punto: this.puntaje
            }
            this.$emit('puntoPregunta', data)
            console.log(this.puntaje);
        },
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


    TODO: Posibles ideas para solucionar nuestros problemas

    Guardar el valor de lo que hizo clic la persona - OK

    Usar v.bind para cambiar la clase y mostrarle al usuario que se marco la pregunta

    Hacer la logica de guardado de esos datos 

    imprimir en el resultado los datos de la persona + el tipo de yoga 

    TODO : Agregado al form

    AGREGAR AL FORM PRINCIPAL - DESCRIBE TU PERSONALIDAD

*/
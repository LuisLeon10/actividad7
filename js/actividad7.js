const actividad = new Vue({
    el: '#cuerpo',
    data: {
        primeraRespuesta: 'espera',
        anios: 0,
        lenguaje: '',
        datos: [],
        motiva: '',
        experiencia: '',
    },
    methods: {
        lenguajes:function(){
            this.datos.push(this.lenguaje);
            this.lenguaje='';
        }
    }
});
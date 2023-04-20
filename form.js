
const miapp = Vue.createApp({
    //data: function (){}
    //una propiedad llamada data que tiene una funcion como valor
    data () {
      return{
        items: [],
        nombre : "",
        edad : 0
      };
    },
    //funciones que se pueden llamar desde el html
    methods: {
      guardar(){
        console.log("guardar");
        this.items.push({nombre: this.nombre, edad: this.edad});
        this.nombre = "";
        this.edad = 0;
      }
    }
  });
  
  miapp.mount('#form');

const app = Vue.createApp({
  data() {
    return {
      items: [
        { nombre: "Gat1", edad: 3, confirmacion: false },
        { nombre: "Gat2", edad: 5, confirmacion: false },
        { nombre: "Gat3", edad: 2, confirmacion: false }
      ],
      gatSeleccionat: null,
      nombre: "",
      edad: 0
    };
  },
  methods: {
    afegirGat() {
      const gat = { nombre: this.nombre, edad: this.edad, confirmacion: false };
      const index = this.items.findIndex(item => item.nombre === gat.nombre);
      if (index === -1) {
        this.items.push(gat);
      } else {
        this.items[index] = gat;
      }
      this.nombre = "";
      this.edad = 0;
      this.gatSeleccionat = null;
    },
    seleccionarGat(index) {
      this.gatSeleccionat = this.items[index];
      this.nombre = this.gatSeleccionat.nombre;
      this.edad = this.gatSeleccionat.edad;
    },
    esborrarGat(index){
      this.items[index].confirmacion = true;
    },
    confirmarEsborrat(index) {
      this.items.splice(index, 1);
    },
    cancelarEsborrat(index) {
      this.items[index].confirmacion = false;
    }

  }
});

app.mount("#app");

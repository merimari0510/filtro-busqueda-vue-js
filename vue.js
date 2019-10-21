
var vm = new Vue({
  el: 'main', 
  data: {
    listado: [
      {titulo: 'Alpha', fecha: 2018, imagen: 'img/alpha.jpg'},	
      {titulo: 'El Señor de los Anillos', fecha: 2012, imagen: 'img/el-senor-de-los-anillos.jpg'},
      {titulo: 'Transformers 5', fecha: 2017, imagen: 'img/transformers-5.jpg'},
      {titulo: 'Pacific Rim 2', fecha: 2018, imagen: 'img/pacific-rim-2.jpg'},
      {titulo: 'Thor', fecha: 2013, imagen: 'img/thor.jpg'},
      {titulo: 'Thor: El Mundo Oscuro', fecha: 2016, imagen: 'img/thor-el-mundo-oscuro.jpg'},
      {titulo: 'Black Panther', fecha: 2018, imagen: 'img/black-panther.jpg'},
      {titulo: 'Wonder Woman', fecha: 2017, imagen: 'img/wonder-woman.jpg'},
      {titulo: 'El Extranjero', fecha: 2018, imagen: 'img/el-extranjero.jpg'},
      {titulo: 'Increibles 2', fecha: 2018, imagen: 'img/increibles-2.jpg'},
      {titulo: 'Capitan America: El Primer Vengador', fecha: 2010, imagen: 'img/capitan-america-el-primer-vengador.jpg'},
      {titulo: 'Capitan America: El Soldado de Invierno', fecha: 2012, imagen: 'img/capitan-america-el-soldado-de-invierno.jpg'},
      {titulo: 'Ant-Man', fecha: 2018, imagen: 'img/ant-man.jpg'},
      {titulo: 'Kickboxer-2', fecha: 2018, imagen: 'img/kickboxer-2.jpg'},
      {titulo: 'Tomb Raider', fecha: 2018, imagen: 'img/tomb-raider.jpg'},
      {titulo: 'Capitan America: Civil War', fecha: 2018, imagen: 'img/capitan-america-civil-war.jpg'},
      {titulo: 'Aniquilacion', fecha: 2018, imagen: 'img/aniquilacion.jpg'},
      {titulo: 'Pacific rim', fecha: 2015, imagen: 'img/pacific-rim.jpg'},
      {titulo: 'Doctor Strange', fecha: 2018, imagen: 'img/doctor-strange.jpg'},
      {titulo: 'Gamer', fecha: 2012, imagen: 'img/gamer.jpg'},
      {titulo: 'Looper', fecha: 2011, imagen: 'img/looper.jpg'},
      {titulo: 'Capitana Marvel', fecha: 2019, imagen: 'img/capitana-marvel.jpg'},
      {titulo: 'Iron Man', fecha: 2009, imagen: 'img/iron-man.jpg'},
      {titulo: 'Iron Man 2', fecha: 2012, imagen: 'img/iron-man-2.jpg'},
      {titulo: 'Iron Man 3', fecha: 2015, imagen: 'img/iron-man-3.jpg'},
      {titulo: 'Thor', fecha: 2018, imagen: 'img/thor.jpg'},
      {titulo: 'Vengadores', fecha: 2015, imagen: 'img/vengadores.jpg'},
      ],
    busqueda: '',
  },
  computed: {
    buscarPorTitulo() { 
      return this.listado.filter((busqueda) => busqueda.titulo.includes(this.busqueda))
    },
 },
})
// Definir atributos iniciales para el Mapa
const MAP_ZOOM = 7
const MAP_CENTER = [-45.8931, -73.1395]
const MAP_CIRCLE = [-46.8025, -72.2640]
const MAP_RADIUS = 5

// Crear instancia del Mapa
var map = L.map('myMap').setView(MAP_CENTER, MAP_ZOOM)

// Crear capa de sectores y Copyright del Mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

// Agregar marcador (Marker) con información emergente (PopUp) de ejemplo
L.marker(MAP_CENTER).addTo(map)
  .bindPopup('Vias de Acceso Reserva Nacional Jeinimeni.')
  
// Agregar circulo marcador (CircleMarker) con información emergente (PopUp) de ejemplo
L.circleMarker(MAP_CIRCLE, { radius: MAP_RADIUS }).addTo(map)
  .bindPopup('Ubicación Reserva Nacional.'),

// Se establece una constante como referencia para mostrar "Información Adicional"
// const mas_info = document.getElementById("mas_info")

function MostrarDato(feature, layer) {
  // Se valida si el objeto tiene la propiedad "properties"
  if (feature.properties) {
    let dato_a_mostrar = `<p>
      <h5>Nombre: ${feature.properties.NOMBRE}</h5><br/>
      <span><b>Superficie</b>: ${feature.properties.Superficie}</span><br/>
   </p>`}


function areaStyle(feature){
	return {
  	fillColor: getAreaColor(feature),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.5}
 };


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

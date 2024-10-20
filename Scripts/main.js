import { series } from './data.js';
function crearTablaSeries() {
    var tabla = document.getElementById('tablaSeries').getElementsByTagName('tbody')[0];
    var sinopsisElem = document.getElementById('sinopsisSerie'); // Elemento donde mostrar la sinopsis
    tabla.innerHTML = ''; // Limpiar contenido previo
    series.forEach(function (serie, index) {
        var fila = tabla.insertRow();
        fila.insertCell(0).innerText = (index + 1).toString();
        fila.insertCell(1).innerText = serie.nombre;
        fila.insertCell(2).innerText = serie.canal;
        fila.insertCell(3).innerText = serie.numTemporadas.toString();
        // Añadir evento para mostrar sinopsis al pasar el mouse
        fila.addEventListener('mouseover', function () {
            sinopsisElem.innerText = serie.sinopsis; // Mostrar la sinopsis
        });
        // Limpiar la sinopsis cuando se quita el mouse de la fila
        fila.addEventListener('mouseout', function () {
            sinopsisElem.innerText = ''; // Limpiar la sinopsis
        });
    });
    mostrarPromedioTemporadas();
}
function mostrarPromedioTemporadas() {
    var promedio = calcularPromedioTemporadas();
    var promedioElem = document.getElementById('promedioTemporadas');
    promedioElem.innerText = "Promedio de Temporadas: ".concat(promedio.toFixed(2));
}
function calcularPromedioTemporadas() {
    var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.numTemporadas; }, 0);
    return totalSeasons / series.length;
}
// Evento para actualizar la tabla
document.getElementById('actualizar').addEventListener('click', crearTablaSeries);
// Llamar la función al cargar la página
window.onload = crearTablaSeries;

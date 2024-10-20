var Serie = /** @class */ (function () {
    function Serie(id, nombre, canal, numTemporadas, sinopsis, // Cambio a sinopsis
    linkNetflix, linkRottenTomatoes) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.numTemporadas = numTemporadas;
        this.sinopsis = sinopsis;
        this.linkNetflix = linkNetflix;
        this.linkRottenTomatoes = linkRottenTomatoes;
    }
    return Serie;
}());
export { Serie };

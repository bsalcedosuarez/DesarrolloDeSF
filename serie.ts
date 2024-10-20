
export class Serie {
    constructor(
        public id: number,
        public nombre: string,
        public canal: string,
        public numTemporadas: number,
        public sinopsis: string,  // Cambio a sinopsis
        public linkNetflix: string,
        public linkRottenTomatoes: string
    ) {}
}

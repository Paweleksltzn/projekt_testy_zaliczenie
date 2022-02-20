exports.Game = class GuessResponse {
    constructor() {
        this.idSesji = Date.now() + Math.floor(Math.random() * 1000000);
        this.liczbaProb = 0;
        this.czasRozpoczeciaGry = Date.now();
        this.liczba = Math.floor(Math.random * 100) + 1;
    }
}

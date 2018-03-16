"use strict";
var Cachorro = /** @class */ (function () {
    function Cachorro(raca, tamanho) {
        this.raca = raca;
        this.tamanho = tamanho;
    }
    Cachorro.prototype.latir = function () {
        console.log("AuAu");
    };
    return Cachorro;
}());
var c1 = new Cachorro("Beagle", 1.0);
c1.latir();

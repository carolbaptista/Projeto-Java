"use strict";
//CLASSE
var Aluno = /** @class */ (function () {
    function Aluno() {
    }
    //MÉTODOS
    Aluno.prototype.imprimir = function () {
        console.log(this.nome);
        console.log(this.endereco);
        console.log(this.telefone);
        console.log(this.idade);
        console.log("------------");
    };
    return Aluno;
}());
//OBJETO
var a1 = new Aluno();
a1.nome = "Caroline";
a1.endereco = "Senac";
a1.telefone = "555-555";
a1.idade = 17;
// OUTRO OBJETO
var a2 = new Aluno();
a2.nome = "Juca";
a2.endereco = "Senac";
a2.telefone = "444-444";
a2.idade = 19;
a1.imprimir();
a2.imprimir();

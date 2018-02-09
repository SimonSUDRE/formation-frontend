console.log("01 - Fonctions");
var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
};

var resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 == "+resultat1);

var somme = additionner;
var resultat2 = somme(nombre1, nombre2);
console.log("resultat2 == "+resultat2);

var multiplication = function(nb1, nb2) {
    return nb1 * nb2;
};

var resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3 == "+resultat3);

var afficherOperation = function(nom, op, nb1, nb2) {
    this.nomOperation = nom;
    this.operation = op;
    this.nb1 = nb1;
    this.nb2 = nb2;
    return this.nomOperation +
        " [ nb1 == " + this.nb1 + " nb2 == " +  this.nb2 + " ]  == " +
        this.operation(this.nb1, this.nb2);
};

console.log(afficherOperation("Somme", somme, nombre2, 40));
console.log(afficherOperation("Multiplication", multiplication, nombre1, nombre2));
console.log(afficherOperation("Soustraction", 
    function(nb1, nb2){
        return nb1 - nb2;
    }, 15, 5));
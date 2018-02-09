function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return this.nom + ", " + this.prenom + ", " + this.pseudo;
    }
};

var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE", "paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

console.log(paul.nom);
console.log(paul.prenom);
console.log(paul.pseudo);
console.log(paul.getNomComplet());

var afficherPersonne = function(personne){
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}
afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = "jules44";
console.log(jules.getNomComplet());

console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);

jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
};
console.log(jules.getInitiales());

var robert = {
    nom : "Robert",
    prenom : "LEPREFET",
    pseudo : "robert77",
    getNomComplet : function(){
        return this.nom + ", " + this.prenom + ", " + this.pseudo;
    }
};

afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient) {
    //this.base = Personne;
    //this.base(nom, prenom, pseudo);
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return this.numeroClient + ", " + this.nom + ", " + this.prenom;
    }
};

var steve = new Client("Steve", "LUCAS", "Steve44", "A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());
var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];


villes.forEach(function(element){
    console.log(element);
});

console.log("lettreADansToutesLesVilles == ",
    villes.every(function(element){
        return element.includes("a");
    })
);

console.log("auMoinsUneVilleAvecUnTiret == ",
    villes.some(function(element){
        return element.includes("-");
    })
);

console.log("villesSansTiretSansEspace == ",
    villes.filter(function(element){
        return !element.includes(" ") & !element.includes("-");
    })
);

console.log("villesMajusculeSeTerminantParS == [",
    villes.filter(
        function(element){
            return element.endsWith("s");
        }
    ).map(
        function(element){
            return element.toUpperCase();
        }
    ), "]"
);
var scanner = require("readline");
var service = require("./service");

const rl = scanner.createInterface({
    input: process.stdin,
    output: process.stdout
});

var menu = function(){
    console.log("*** Application Conférence ***");
    console.log("1. Liste de tous les présentateurs");
    console.log("2. Top présentateurs");
    console.log("3. Liste des sessions" );
    console.log("4. Détail d'une session");
    console.log("5. close");
}

menu();
rl.on('line', (input) => {
    switch (input) {
        case "1" :
            console.log(service.listerTousLesPresentateurs().map(element => {
                return element.firstname + ", " + element.lastname;
            }));
            menu();
            break;
        case "2" :
            console.log(service.listerTopPresentateurs().map(element => {
                return element.firstname + ", " + element.lastname;
            }));
            menu();
            break;
        case "3" :
            console.log(service.listerToutesLesSessions().map(element => {
                return element.title;
            }));
            menu();
            break;
        case "4" :
            rl.question('idSession : ', (input) => {
                var session = service.trouverUneSessionFind(input);
                console.log(session.title, ":", session.speakers);
                menu();
            });
            break;
        case "5" :
            rl.close();
            break;
    }
});

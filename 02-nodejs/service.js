var data = require("./data/devfest-2015");

exports.listerTousLesPresentateurs = function(){
    return data.module.speakers;
};

exports.listerToutesLesSessions = function(){
    return data.module.sessions;
};

exports.trouverUneSession = function(idSession){
    return data.module.sessions.filter(element => {
        return element.id == idSession;
    });
};

exports.trouverUneSessionFind = function(idSession){
    return data.module.sessions.find(element => {
        return element.id == idSession;
    });
};

exports.listerTopPresentateurs = function(){
    return data.module.speakers.filter(element => {
        return element.topspeaker == true;
    });
};
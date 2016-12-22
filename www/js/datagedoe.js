
var App = {
    "parken":{},
    "init":function(){
        var self = this;
        
        var url = "/data/parken.json";
        self.loadJson(url);
    },
    "loadJson":function(url){
        var results = Utils.getJSONByPromise(url);
        console.log("Results",results);
    }
};

document.addEventListener("DOMContentLoaded", function(){
   App.init();
});


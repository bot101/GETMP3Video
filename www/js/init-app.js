App.initEvents = function() {
    "use strict" ;
	console.log("App.initEvents");
	App.init();
    App.splashScreenHide(); 
    alert();
} ;
document.addEventListener("deviceready", App.initEvents, false) ;
console.log("init-app.js");
//window.app = new App() || {}; //Creates a global app 
/*
cordova.js
class.App.js
class.AppSetting.js
app.js
init-app.js
index_user_scripts.js

		*/
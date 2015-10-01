/*
    @author         Okafor Anthony Ikenna
    @email          ikenna@getmp3video.com
    @description    The App object is the app's manager and performs all app specific functions

*/
	
function App(){
	console.log("App");
}

App.prototype.name = "App";	//This is the className returned by toString()
App.prototype.serverURL = "http://www.getmp3video.com";
App.prototype.fName = "App()";	//This is the full className returned by toFString()
App.prototype.networkStatus;		//The network's current status
App.prototype.isOnline;			//App connectivity state, true if online else false
App.prototype.db;      			//The local storage object
App.prototype.DEVICE_NAME;  	//The device name
App.prototype.PG_VER;           //Phonegap/Cordova version
App.prototype.DEVICE_OS;        //Device's operating system name
App.prototype.DEVICE_ID;        //The device's unique id
App.prototype.OS_VERSION;       //The device's OS version
  
// Returns the name of the class
App.prototype.toString = function(){
	console.log(App.name);
        return App.name;
    };

// Returns the full name of the class
App.prototype.toFString = function(){
	console.log("App.prototype.toFString");
        return App.fname;
    };

//This function runs the first time the app is run
App.prototype.firstRun = function(){
	console.log("App.prototype.firstRun");
        if(App.db !== window.localStorage) 
            App.db = window.localStorage;
        App.db.setItem('device_name',device.name); //replace all Apps in brackets with device
        App.db.setItem('pg_version',device.cordova);
        App.db.setItem('device_os',device.platform);
        App.db.setItem('device_id',App.uuid);
        App.db.setItem('device_os_ver',App.version);
		App.db.setItem('setting_check_update', '1');
    };
 
//This function performs all data storage and retrievals    
App.prototype.dsQuery = function(){
	console.log("App.dsQuery");
    };
 
//This function checks the device's connection status everytime it changes and upates the networkStatus and isOnline variables accordingly
	
/*
This function performs all server communication.
It accepts a single parameter, an object o which should have the following parameters and functions:
o.url: The url to be queied.
o.message: The message to be sent across the network. [String]
o.method: Either GET or POST. Method to be used in sending the message. [String]
o.success(optional): An optional callback function to be executed after the message has succeeded. [fn]
o.fail(optional): An optional callback function to be executed after the message has failed. [fn]
o.rHeader(optional): Request header parameters in a name=value pair. [String]

Returns
The function returns an object with the following values.
ajax.responseText: The responseText received from the server.
ajax.statusText: The response status text received from the server.
ajax.status: The status code receive from the server.
*/

App.prototype.dataTransfer = function(o){
	//console.log("App.dataTransfer");
			if(!App.isOnline){
				App.errorScreen("Appour device is offline!");
				return null;
			} else {
				var ajax = ajax || new XMLHttpRequest();
				if(o.method == "GET"){
				ajax.open(o.method,o.url+o.message);
				ajax.send();
				} else {
					ajax.open(o.method, o.url);
					ajax.setRequestHeader(o.rHeader);
					ajax.send(o.message);
				}
				ajax.onreadystatechange = (function(e){
					if(o.callBackSuccess != null && ajax.status == 200 && ajax.readyState == 4){
						o.callBackSuccess.call(this,e);
					}
					if(o.callBackFail != null && ajax.status != 200 && ajax.readyState != 4){
						o.callBackFail.call(this,e);
					}
				});
			}//Mock data
	//e = '{"title": "Mock Title", "filesize":"3mb", "link": "youin.com/gghrrt.mp3"}';
					return JSON.parse(e);
    };

App.prototype.youGetterApi = function(message, method, cbSuccess, cbFail){
	 //Sends video link to app's server
	console.log("App.youGetterApi");
	};

App.prototype.audioDownload = function(){
	console.log("App.audioDownload");
};

App.prototype.linkGetter = function(yid){
	console.log("App.linkGetter");
	var sString = $(yid).value;
	
};
//state == 1: Show wait screen
//state == 0: Hide wait screen
App.prototype.waitScreen = function(state){
	console.log("App.waitScreen");
		if(state == 1) {
			$("#wait-box").show();
					   }
		if(state == 0) $("#wait-box").hide();
};
	
App.prototype.errorScreen = function(msg){
	console.log("App.errorScreen");
	if(!msg){
		msg = "Error!";
	}
	//$("#error-box>div").text = msg;
	$("#error-box").show();
	setTimeout(function(){$("#error-box").hide();},4000);

	
};

App.prototype.youDownload = function(yid){
	console.log("App.youDownload"); 
		linkGetter(yid);
		App.waitScreen(1);
		if(!responseOk) errorScreen();
		if(responseOk){
				
			}
	};


App.prototype.alertDialog = function(msg){
	console.log("App.alertDialog");
		//displays s custom alert box and an ok button to close
		//Temporarily use native alerts here till custom alert boxes are provide
		window.alert(msg);
	};
	
App.prototype.confirmDialog = function(msg, callback){
		console.log("App.confirmDialog");
		var args = arguments; //Holds the parameters passed to the function
		//Temporarily use native confirm dialog until custom dialog is available
		var response = window.confirm(msg);
		callback.call(response);
	};
		
App.prototype.msgDialog = function(msg){
	console.log("App.msgDialog");
	//Displays messages to the user and an ok button to close the dialog
	};

 App.prototype.splashScreenShow = function(){
	console.log("App.splashScreenShow");
	 	if( navigator.splashscreen && navigator.splashscreen.show ) {   // Cordova API detected
        navigator.splashscreen.show() ;
    }
    if( window.intel && intel.xdk && intel.xdk.device ) {           // Intel XDK device API detected, but...
        if( intel.xdk.device.showSplashScreen )                     // ...hideSplashScreen() is inside the base plugin
            intel.xdk.device.showSplashScreen() ;
    	}
 	}; 

 App.prototype.splashScreenHide = function(){
	 console.log("App.splashScreenHide");
	 
	 	if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    if( window.intel && intel.xdk && intel.xdk.device ) {           // Intel XDK device API detected, but...
        if( intel.xdk.device.hideSplashScreen )                     // ...hideSplashScreen() is inside the base plugin
            intel.xdk.device.hideSplashScreen() ;
    	}

 	};
	
App.prototype.exit = function(){
	console.log("App.exit");
	//Exits the application
	//Later perform app exit operations before exiting app here
	navigator.app.exitApp();
	
	};
	
//Performs all startup operations 

App.prototype.init = function(){
	console.log("App.init");
    if(App.db !== window.localStorage) App.db = window.localStorage;
    App.DEVICE_NAME  = App.db.getItem('device_name');
    App.PG_VER  = App.db.getItem('pg_version');
    App.DEVICE_OS  = App.db.getItem('device_os');
    App.DEVICE_ID  = App.db.getItem('device_id');
    App.OS_VERSION  = App.db.getItem('device_os_ver');
	if(App.DEVICE_ID == null) App.firstRun();
	App.connUpd();
	window.history.go(0);
     //May be debugged here

};
	
App.prototype.connUpd = function(){
	console.log("App.connUpd");
	App.isOnline = navigator.onLine;
	
	//if(state == "Connection.NONE"){
	App.isOnline = true;		
	//} else {

		App.isOnline = false;
	//}
}
	//};
	window.App = new App() || {};



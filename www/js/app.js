//window.App = new App() || {}; //Creates a global app 

function loadGeneratedLink(e){
	App.waitScreen(0);
	if(e)
	document.getElementById("mp3-dld-btn").setAttribute("href",e.link);
	
	activate_subpage("#page_64_30");
}

function showError(msg){
	App.waitScreen(0);
	App.errorScreen(msg);
}

function youDownload(id){
	var val = document.getElementById(id).value;
	var msg = {
			"url":App.serverURL,
			"message":val,
			"method":"GET",
			//"success": loadGeneratedLink,
			//"fail":showError,
			"rHeader":null
			};
	App.waitScreen(1);
	var res = App.dataTransfer(msg);
	if(res == null){
		App.waitScreen(0);
		console.log(res);
	} else {
		App.waitScreen(0);
		loadGeneratedLink(res);
	}
}
console.log("app.js");
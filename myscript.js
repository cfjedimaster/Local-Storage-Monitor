function getData() {
	var lsSize = localStorage.length;
	var data = {};
	for(key in localStorage) {
		if(key && key.length > 0) {
			data[key] = localStorage[key];
		}
		else {
			lsSize--;
		}
	}
	
	chrome.extension.sendRequest({"size": lsSize,"data":data});
}

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
	getData();	  
	sendResponse({});
});

//fire immediately
getData();
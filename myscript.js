function getData() {
	var lsSize = localStorage.length;
	data = {};
	for(key in localStorage) {
		data[key] = localStorage[key];
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
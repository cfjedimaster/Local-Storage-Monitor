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

	var bytes = JSON.stringify(localStorage).length;
	var kb = Math.round((bytes / 1024) * 100)/100;
	var mb = Math.round((kb / 1024) * 1000)/1000;

	chrome.extension.sendRequest({ "size": lsSize, "data": data, "mb": mb, "kb": kb });
}

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		getData();
		sendResponse({});
	}
);

//fire immediately
getData();
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

function deleteAllStorage() {
	for(key in localStorage) {
		localStorage.removeItem(key);
	}
}

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		if (request['action'] == "delete_all") {
			deleteAllStorage();
			getData();
			sendResponse({});
		} else if (request['action'] == "delete_item") {
			localStorage.removeItem(request['item']);
			getData();
			sendResponse({});
		} else if (request['action'] == "update_storage") {
			getData();
			sendResponse({});
		}
	}
);

//fire immediately
getData();
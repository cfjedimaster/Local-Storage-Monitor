var TOTAL = 0;
var DATA = 0;
var KB = 0;
var MB = 0;
var selectedTabId = -1;

//got a message from content script
chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		var actualSize = 0;
		// for usability, let's not display any null entries.
		for(key in request.data) {
			if(key && key.length > 0) {
				actualSize++;
			}
		}

		updateUI(actualSize);
		DATA = request.data;
		MB = request.mb;
		KB = request.kb;
		sendResponse({action: 'update_storage'});
	}
);

//our tabs change, so ask our CS to udpate crap
chrome.tabs.onSelectionChanged.addListener(
	function(tabId,selectInfo) {
		selectedTabId = tabId;
		chrome.tabs.sendRequest(tabId,{action: 'update_storage'});
	}
);

function updateUI(total) {
	chrome.browserAction.setTitle({"title":"There are "+total +" items in Local Storage"});
	chrome.browserAction.setBadgeText({'text':total.toString()});
	//Copy to global scope so our popup can get it
	TOTAL = total;
}

function deleteAll() {
	chrome.tabs.sendRequest(selectedTabId, {action: 'delete_all'});
	chrome.tabs.update(selectedTabId, { selected: true } );
}

function deleteItem(key) {
	chrome.tabs.sendRequest(selectedTabId, {action: 'delete_item', item: key});
}

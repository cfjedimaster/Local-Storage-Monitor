$(document).ready(function() {
	var bg = chrome.extension.getBackgroundPage();

	var makeDataTable = function(data) {

		var objectDataTable = "<table>";

		for(key in data) {
			objectDataTable += "<tr><td>" + key + "</td><td>";

			var itemObject;

			try {
				itemObject = JSON.parse(data[key]);
			}
			catch(err) {
				itemObject = data[key];
			}

			if(typeof itemObject == "object")
			{
				objectDataTable += makeDataTable(itemObject);
			}
			else {
				objectDataTable += itemObject;
			}

			objectDataTable += "</td></tr>";
		}

		objectDataTable += "</table>";

		return objectDataTable;
	}

	$('h3').html("There are " + bg.TOTAL + " items in local storage, using " + bg.KB + "KB (" + bg.MB + "MB)");

	if(bg.TOTAL > 0) {
		var html = "";
		for(key in bg.DATA) {
			html += "<tr><td>" + key + "</td><td>";

			var itemObject;

			// lets see if this is a JSON object
			try {
				itemObject = JSON.parse(bg.DATA[key]);
			}
			catch(err) {
				itemObject = bg.DATA[key];
			}

			if(typeof itemObject == "object")
			{
				html += makeDataTable(itemObject);
			}
			else {
				html += itemObject;
			}

			html += "</td></tr>";
		}
		$("#data").append(html);
	}
});

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

	var updateHeader = function() {
		var bg = chrome.extension.getBackgroundPage();
		$('h3').html("There are " + bg.TOTAL + " items in local storage, using " + bg.KB + "KB (" + bg.MB + "MB)" + (bg.TOTAL > 0 ? " <button id='delete'>Delete All</button>" : ""));
	};
	updateHeader();
	
	$('#delete').on('click', function() {
		chrome.extension.getBackgroundPage().deleteAll();
	});
	
	var idKeyMap = new Object();
	if(bg.TOTAL > 0) {
		var html = "";
		
		var id = 0;
		for(key in bg.DATA) {
			html += "<tr id='" + id + "'><td>" + key + "</td><td>";
			
			idKeyMap[id] = key;

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

			html += "</td><td><button name='" + id + "'>Delete</button></td></tr>";
			
			id++;
		}

		$("#data").append(html);
						
		$("button").on('click', function() {
			var name = $(this).prop('name');
			$("#" + name).remove();
			chrome.extension.getBackgroundPage().deleteItem(idKeyMap[name]);
			setTimeout(updateHeader, 250);
		});

	}
});

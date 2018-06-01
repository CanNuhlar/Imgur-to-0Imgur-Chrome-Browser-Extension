document.addEventListener('DOMContentLoaded', () => { //on page load
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) { //fired on tap update
		var currentURL = tab.url; //get URL
		if (currentURL.indexOf("imgur.com") !== -1 && currentURL.indexOf("0imgur.com") == -1){ //URL consists imgur and not replaced before
			var newURL = currentURL.replace("imgur.com", "0imgur.com"); //replace imgur.com with 0imgur.com
			chrome.tabs.update(tab.id, {url: newURL}); //go to new URL
		}
	});
});

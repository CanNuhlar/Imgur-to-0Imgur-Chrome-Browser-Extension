function replaceOnBody(){
	var bodyHTML = document.getElementsByTagName("body")[0].innerHTML; //get HTML content
	if (bodyHTML.indexOf("imgur") !== -1){ //replacing without checking causes to hang down some js heavy sites
		document.getElementsByTagName("body")[0].innerHTML = bodyHTML.replace(/\/\/imgur.com/g, "//0imgur.com"); //replace //imgur.com with //0imgur.com to enable embedded images
	}
}

replaceOnBody();

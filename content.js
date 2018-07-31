function replaceOnBody(){
	var bodyHTML = document.documentElement.innerHTML; //get HTML content
	if (bodyHTML.indexOf("imgur.com") !== -1){ //replacing without checking causing lock up on some sites that has over 1 million lines of HTML
		document.documentElement.innerHTML = bodyHTML.replace(/\/\/imgur.com/g, "//0imgur.com"); //replace //imgur.com with //0imgur.com to enable embedded images
	}
}

replaceOnBody();

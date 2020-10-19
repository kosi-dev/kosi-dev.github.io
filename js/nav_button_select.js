
function nav_button_select(button) {
	let ul = document.getElementsByTagName("nav")[0].firstElementChild
	let index;
	
	if (button == "home") {
		index = 0;
	}
	else if (button == "projects") {
		index = 1;
	}
	else if (button == "about") {
		index = 2;
	}
	else if (button == "contact") {
		index = 3;
	}

	ul.children[index].firstElementChild.classList.add("selected");	
}

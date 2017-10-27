var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1; i < 6 ; i++){

	var newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/pic'+i+'.jpg');
	thumbBar.appendChild(newImage);
	newImage.onclick = function(event) {
		var currentAttribute = event.target.getAttribute("src");
		displayedImage.setAttribute('src',currentAttribute);
		// displayedImage.setAttribute("src", 'images/pic'+i+'.jpg');
	}
}
btn.onclick = function(event) {
	if(btn.getAttribute('class')=='light'){
		btn.setAttribute('class', 'dark');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
	}else{
		btn.setAttribute('class', 'light');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = "rgba(0,0,0,0)";

	}

}



// thumbBar.onclick = function(event) { alert(event.target) ;};


/* Wiring up the Darken/Lighten button */


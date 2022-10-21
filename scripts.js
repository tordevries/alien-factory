/* code for Alien Factory */

function changePalette(toFeature) {
	document.querySelector("#palette").classList.remove("showBody");
	document.querySelector("#palette").classList.remove("showFace");
	document.querySelector("#palette").classList.remove("showArms");
	document.querySelector("#palette").classList.remove("showFeet");
	document.querySelector("#palette").classList.add(toFeature);
}



window.onload = function() {
	
	/* onclick functions for palette shifting */
	document.querySelector("#featuresBody h1").onclick = function() {
		changePalette("showBody");
	}
	document.querySelector("#featuresFace h1").onclick = function() {
		changePalette("showFace");
	}
	document.querySelector("#featuresArms h1").onclick = function() {
		changePalette("showArms");
	}
	document.querySelector("#featuresFeet h1").onclick = function() {
		changePalette("showFeet");
	}
	
	/* onclick functions for avatar preview updates */
	document.querySelector("#bodyOption1").onclick = function() {
		
		document.querySelector("#previewBody").classList.add("robot");
		
	}
	
}
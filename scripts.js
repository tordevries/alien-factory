/* code for Alien Factory */

/* function to change the palette classes so different things appear, per CSS styles*/
function changePalette(toFeature) {
	document.querySelector("#palette").classList.remove("showBody");
	document.querySelector("#palette").classList.remove("showFace");
	document.querySelector("#palette").classList.remove("showArms");
	document.querySelector("#palette").classList.remove("showFeet");
	document.querySelector("#palette").classList.add(toFeature);
}

/* function to update the classes on the various avatar layers*/
function updateAvatar(toLayer, toOption) {
	document.querySelector("#welcomeBox").style.display = "none"; // hide the title box
	document.querySelector(toLayer).classList.remove("robot");
	document.querySelector(toLayer).classList.remove("cyclops");
	document.querySelector(toLayer).classList.remove("birdman");
	document.querySelector(toLayer).classList.add(toOption);
}


window.onload = function() {
	
	/* onclick functions for palette shifting */
	document.querySelector("#featuresBody h1").onclick = function() { changePalette("showBody"); }
	document.querySelector("#featuresFace h1").onclick = function() { changePalette("showFace"); }
	document.querySelector("#featuresArms h1").onclick = function() { changePalette("showArms"); }
	document.querySelector("#featuresFeet h1").onclick = function() { changePalette("showFeet"); }
	
	/* onclick functions for avatar preview updates */
	document.querySelector("#bodyOption1").onclick = function() { updateAvatar("#previewBody", "robot"); }
	document.querySelector("#bodyOption2").onclick = function() { updateAvatar("#previewBody", "birdman"); }
	document.querySelector("#bodyOption3").onclick = function() { updateAvatar("#previewBody", "cyclops"); }

	document.querySelector("#faceOption1").onclick = function() { updateAvatar("#previewFace", "robot"); }
	document.querySelector("#faceOption2").onclick = function() { updateAvatar("#previewFace", "birdman"); }
	document.querySelector("#faceOption3").onclick = function() { updateAvatar("#previewFace", "cyclops"); }
	
	document.querySelector("#armsOption1").onclick = function() { updateAvatar("#previewArms", "robot"); }
	document.querySelector("#armsOption2").onclick = function() { updateAvatar("#previewArms", "birdman"); }
	document.querySelector("#armsOption3").onclick = function() { updateAvatar("#previewArms", "cyclops"); }

	document.querySelector("#feetOption1").onclick = function() { updateAvatar("#previewFeet", "robot"); }
	document.querySelector("#feetOption2").onclick = function() { updateAvatar("#previewFeet", "birdman"); }
	document.querySelector("#feetOption3").onclick = function() { updateAvatar("#previewFeet", "cyclops"); }
	
	
	
}




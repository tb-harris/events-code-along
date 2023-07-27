// get div reference
let divRef = document.querySelector("div");

// get reference to the click button
let buttonRef = document.getElementById("click-me");

// set up an onclick function for buttonRef
buttonRef.onclick = function() {
    // have the button do something
    // buttonRef.style.backgroundColor = "pink";
    // buttonRef.innerHTML = "YOU CLICKED";

    // flipping background color
    if (divRef.style.backgroundColor == "orange") {
        divRef.style.backgroundColor = "aqua";
        divRef.innerHTML = "I am a squirtle";
    }

    else {
        divRef.style.backgroundColor = "orange";
        divRef.innerHTML = "I am a charmander";
    }
}

/* TOGGLING DISPLAY */

let displayButton = document.getElementById("display");

// set up an onclick function for visibilityButton
displayButton.onclick = function() {
    // whenever you click on the button,
    // if the box is visible, hide it 
    if (divRef.style.display == "block") {
        divRef.style.display = "none";
        displayButton.innerHTML = "show";
    }

    // if the box is hidden, show it
    else {
        divRef.style.display = "block";
        displayButton.innerHTML = "hide";
    }
}


/* MOUSE OVER AND MOUSE OUT */

// onmouseover
divRef.onmouseover = function() {
    // console.log("The mouse is on the div");
    // divRef.style.backgroundColor = "green";
    divRef.innerHTML = "Ouch!";

    // decrease the opacity
    divRef.style.opacity = "0.8";
}

// onmouseout
divRef.onmouseout = function() {
    divRef.style.backgroundColor = "orange";
    divRef.innerHTML = "The mouse is not on me anymore";

    // increase the opacity back to 1
    divRef.style.opacity = "1";
}
        
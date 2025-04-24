// VARIABLES store DATA 
//Boolean variable to track color theme
let isDarkMode = false;


//Declare variables to hold references 
// to ELEMENTS to the HTML DOCUMENT
const body = document.querySelector("body");


//Once you can select an Element, can modify PROPERTIES
body.style.backgroundColor = "black";

//Select elements that we need to work with 
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleButton = document.querySelector("#toggle");
const imageElement= document.querySelector("#bag");

//Define instructions to do when button is clicked
function toggleMode() {
    // Flip the boolean value using the NOT (!) operator
    isDarkMode= ! isDarkMode;

    // Conditional blocks to handle styling 
    //depending on whatever isDarkMode is True or not
    if (isDarkMode == true) {
        //Apply DARK MODE styles 
        body.style.backgroundColor = "pink";
        body.style.color = "white";
        heading.style.color="orange";
         //Change TEXT of the elements
         description.textContent = "Welcome to the Ocean🌊🌺";
         toggleButton.textContent = "Switch to light mode";
         imageElement.src ="Brown bag.jpg";
    }
    else {
        // Appy LIGHT MODE styles
        body.style.backgroundColor = "lightblue";
        body.style.color = "yellow";
    
        heading.style.color="white";
        //Change TEXT of the elements
        description.textContent = "Switch to light mode";
        toggleButton.textContent = "Welcome to the dark side";
        imageElement.src ="Sadie Patchwork Bag.jpg";





    }
} 
//Attach the function to the button
toggleButton.addEventListener("click",toggleMode);

   


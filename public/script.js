"strict mode";

/****************** COUNTDOWN (May 10th at 5pm)   ********************** */
/*********************************************************/
//Set the museum date to May 10th at 5pm
let museumTime = new Date("May 10, 2021 17:00:00").getTime();

//Function that updates the countdown every second is called every second
let myDate = setInterval(countDown, 1000);

function countDown() {
    //Get the current time
    let curTime = new Date().getTime();

    //Calculate the seconds until the museum date
    let timeDiff = museumTime - curTime;

    //Convert from miliseconds to seconds
    let timeSeconds = Math.floor(timeDiff / 1000);

    //Add commas for the countdown number
    let countdownSec = timeSeconds.toLocaleString();

    //Add the countdown timer to our HTML
    document.getElementById("countDown").innerHTML = countdownSec;

    //Stop the countdown and display expired when we reach May 10th at 5:00pm
    if (timeDiff == 0) {
        clearInterval(myDate);
        document.getElementById("countDown").innerHTML = "Past the Museum Time!";
    }
}


/*********************************************************/
/*********************************************************/


/******************   SLIDESHOW   ********************** */
/*********************************************************/

// Got help from w3schools.com
//Initialize the slide number to be shown
let slideNum = 1;

//Display the first slide by default
displaySlide(slideNum);

//Function for changing slides using arrow buttons
function slideChange(x) {
    slideNum += x;
    displaySlide(slideNum);
}

//Function for changing slides using the bottom dots
function goToSlide(x) {
    slideNum = x;
    displaySlide(slideNum);
}

//Function to display the current slide
function displaySlide(x) {
    //Grab the 4 slides and the 4 bottom dots
    let slideArray = document.getElementsByClassName("slide");
    let dotArray = document.getElementsByClassName("dot");

    //If the passed in slide number is bigger than 4, go back to slide 1
    //If the passed in slide number is smaller than 1, go to the last slide
    if (x > slideArray.length) {
        slideNum = 1;
    }
    if (x < 1) {
        slideNum = slideArray.length;
    }

    //Loop through the slides and make them disappear and make all the dots inactive
    for (var i = 0; i < slideArray.length; i++) {
        slideArray[i].style.display = "none";
        dotArray[i].className = dotArray[i].className.replace(" current", "");
    }

    //Now display the current slide and make the corresponding dot active
    slideIndex = slideNum - 1; //Slide numbers go from 1-4, but array index is 0-3
    slideArray[slideIndex].style.display = "block";
    dotArray[slideIndex].className += " current";
}

/*********************************************************/
/*********************************************************/
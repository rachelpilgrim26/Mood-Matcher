// declare my variables left them empty so i could call them later in the else ifs
// bascially setting it to an empty  string
let output = "";
// you can fill this variable with a message or some text when something happens in your code

let imgAlt = "";
// alt text is what gets shown if the image doesn't load or to the users with screen reader

let imgSrc = "";
// is where you can store the link or file to the image you want to show

// function to handle form submit like when you click it
function handleFormSubmit(event) {
  // normally submitting a form makes the browser reload the page  we dont want that
  event.preventDefault();
  // this is made to reset the form and clean up anything the user has done or seen

  // this is another function inside the first one.
  function handleReset() {
    // this line finds another part of the page  one that shows a message the user wrote
    // and clears that text too

    // output means find the element like a box or paragraph that has a class name of output.
    document.querySelector(".output").textContent = "";

    // userNote is the class name of that element
    document.querySelector(".userNote").textContent = "";

    //  go look at the html and  find something that has the class name moodImage
    //once you find it save it in a box called moodImage so I can do things with it later
    let moodImage = document.querySelector(".moodImage");

    moodImage.src = "";
    //take the image I found called moodImage and erase the picture
    moodImage.alt = "";
    // clear the description of the image
    moodImage.style.display = "none";
    //make it invisible and don’t even take up space for it on the page

    // resets background color
    document.body.style.backgroundColor = "#5998ea";

    document.querySelector("#moodForm").reset();
    // resets form
  }

  document.querySelector("#resetBtn").addEventListener("click", handleReset);
  // event listener for reset button i tried alot of different ways this was very difficult for me

  // got the values using dot notation
  let mood = document.querySelector("#mood").value;
  //So if the user typed happy into that input box, then mood would now hold the word happy
  let note = document.querySelector("#note").value;
  //find the box with the ID note and what was typed in it and store it in a container called note
  let body = document.body;
  // get the main part of the html the whole body and save it in a box called body

  // reassign output imgAlt imgSrc based on mood and also included a else to have youo make a selection
  if (mood === "happy") {
    output = "Yay! Keep smiling 😊";
    imgAlt = "Smiling face";
    imgSrc = "https://cdn-icons-png.flaticon.com/512/742/742751.png";
    body.style.backgroundColor = "#FFFACD";
  } else if (mood === "sad") {
    output = "It's okay to feel sad sometimes 💙";
    imgAlt = "Sad face";
    imgSrc = "https://cdn-icons-png.flaticon.com/512/742/742752.png";
    body.style.backgroundColor = "#ADD8E6";
  } else if (mood === "calm") {
    output = " Peaceful and present 🌿";
    imgAlt = "Calm face";
    imgSrc = "https://cdn-icons-png.flaticon.com/512/5786/5786952.png";
    body.style.backgroundColor = "#E0FFE0";
  } else {
    output = "Please select a mood!";
    imgAlt = "";
    imgSrc = "";
    body.style.backgroundColor = "#FFFFFF";
  }

  // update the DOM
  document.querySelector(".output").textContent = output;
  document.querySelector(".userNote").textContent = note
    ? `You said: "${note}"`
    : "";
  // this line above is closing the string meaning it will clear any previous text in that element this is something i watched in a video.

  //this one is more for the smiling faces to pop up and style correctly
  let moodImage = document.querySelector(".moodImage");
  // this line finds something on your page using
  // an element like an image with the class name .moodImage

  //This checks do I have a value for imgSrc
  if (imgSrc) {
    moodImage.src = imgSrc;
    //this tells the image on your page
    moodImage.alt = imgAlt;
    //this helps people who cant see images blind users with screen reader
    // and it shows up if the image cant load
    moodImage.style.display = "inline";
    //if it had been hidden before now it will be shown
  } else {
    moodImage.style.display = "none";
  }
  //This is the opposite of the if if imgSrc is empty if there is
  // nothing to show then it hides the img to display none
}

// this is to find the form element
let moodForm = document.querySelector("#moodForm");

// this is when the form is submitted run the handleFormSubmit function
moodForm.addEventListener("submit", handleFormSubmit);

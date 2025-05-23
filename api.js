// declare my own variables left them empty so i could call them later in the else ifs
let output = "";
let imgAlt = "";
let imgSrc = "";

// function to handle form submit
function handleFormSubmit(event) {
  event.preventDefault();

  // got the values using dot notation
  let mood = document.querySelector("#mood").value;
  let note = document.querySelector("#note").value;
  let body = document.body;
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
  if (imgSrc) {
    moodImage.src = imgSrc;
    moodImage.alt = imgAlt;
    moodImage.style.display = "inline";
  } else {
    moodImage.style.display = "none";
  }
}

// this is to find the form element
let moodForm = document.querySelector("#moodForm");

// this is when the form is submitted run the handleFormSubmit function
moodForm.addEventListener("submit", handleFormSubmit);

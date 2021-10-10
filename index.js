// Get the value from input
const inputForm = document.getElementById("form");

let allbuttons = document.querySelectorAll(".form__icon");

inputForm.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    openInNewTab("https://www.google.com/search?q=", e.target.value);
  }
});

allbuttons.forEach((btn) => {
  btn.addEventListener("click", search);
});

/*
document.getElementById("id_of_textbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("id_of_button").click();
    }
});
*/

function search(e) {
  const btn = e.target.parentElement.getAttribute("id");

  if (inputForm.value.length > 0) {
    switch (btn) {
      case "google":
        openInNewTab("https://www.google.com/search?q=", inputForm.value);
        break;
      case "youtube":
        openInNewTab("https://www.youtube.com/results?search_query=", inputForm.value);
        break;
      case "unsplash":
        openInNewTab("https://unsplash.com/s/photos/", inputForm.value);
        break;
      default:
        console.log("hmmm I don't know the button");
    }
  } else {
    console.log(`Hey you pressed the ${btn} button, but no input`);
  }
}

function openInNewTab(url, searchEndpoint) {
  window.open(url + searchEndpoint, "_blank");
  inputForm.value = "";
  inputForm.focus();
}

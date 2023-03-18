let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let newsYes = document.querySelector("#yes");
let newsNo = document.querySelector("#no");
let date = document.querySelector("#date");
let form = document.querySelector("#form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  console.log("======== Form Submission ========");

  if (
    (userName.value == null || userName.value == "") &&
    (email.value == null || email.value == "")
  ) {
    console.warn("You must enter some data to submit this form");
  } else {
    if (userName.value) {
      console.log("Username: " + userName.value);
    } else {
      console.log("Username: no submission");
    }

    if (email.value) {
      console.log("Email: " + email.value);
    } else {
      console.log("Email: no submission");
    }

    if (newsYes.checked) {
      console.log("Newsletter: Yes");
    } else if (newsNo.checked) {
      console.log("Newsletter: No");
    } else {
      console.log("Newsletter: no submission");
    }

    if (date.value) {
      console.log("Date: " + date.value);
    } else {
      console.log("Date: no submission");
    }

    event.preventDefault();
  }
}

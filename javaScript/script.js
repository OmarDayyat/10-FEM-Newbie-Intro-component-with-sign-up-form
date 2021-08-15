const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const errorImage = document.querySelectorAll(".error-image");
const errorMsg = document.querySelectorAll(".error-msg");
const section = document.querySelector(".form-container");

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


//Simple way of validation
function displayBlock(element) {
  element.style.display = "block";
}

function displayNone(element) {
  element.style.display = "none";
}

function required(fieldName, errorMsgText, i) {

  if (fieldName == email && email, email.value !== "" && email.value !== null) {
    if (!email.value.match(emailRegex) && email.value !== "" && email.value != null) {
      email.style.borderColor = "red";
      displayBlock(errorMsg[2]);
      displayBlock(errorImage[2]);
      errorMsg[2].innerText = "Please provide a valid email";
    }
    if (email.value.match(emailRegex) && email.value !== "") {
      email.style.borderColor = "green";
      displayNone(errorMsg[2]);
      displayNone(errorImage[2]);
      errorMsg[2].innerText = "";
    }
  }
  else {
    if (fieldName.value === "" || fieldName.value == null) {
      fieldName.style.borderColor = "red";
      displayBlock(errorMsg[i]);
      displayBlock(errorImage[i]);
      errorMsg[i].innerText = errorMsgText;
    }
    else {
      fieldName.style.borderColor = "green";
      displayNone(errorMsg[i]);
      displayNone(errorImage[i]);
      errorMsg[i].innerText = "";
    }
  }
}

form.addEventListener('submit', (e) => {

  e.preventDefault();

  required(fName, "First name can't be empty", 0);
  required(lName, "Last name can't be empty", 1);
  required(email, "Email name can't be empty", 2);
  required(pass, "Password can't be empty", 3);

})
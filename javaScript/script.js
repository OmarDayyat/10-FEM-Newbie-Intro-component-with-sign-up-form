const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const errorImage = document.querySelectorAll(".error-image");
const errorMsg = document.querySelectorAll(".error-msg");

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


//forEach method of validation
function displayBlock(element) {
  element.style.display = "block";
}

function displayNone(element) {
  element.style.display = "none";
}

form.addEventListener('submit', (e) => {

  e.preventDefault();
  let fields = [
    { name: fName, errorMsgText: "First name can't be empty", fieldNumber: 0 },
    { name: lName, errorMsgText: "Last name can't be empty", fieldNumber: 1 },
    { name: email, errorMsgText: "Email can't be empty", fieldNumber: 2 },
    { name: pass, errorMsgText: "Password can't be empty", fieldNumber: 3 },
  ]

  fields.forEach(element => {
    if (element.name == email && element.name.value !== "") {
      if (!email.value.match(emailRegex) && email.value !== "" && email.value != null) {
        element.name.style.borderColor = "red";
        displayBlock(errorImage[element.fieldNumber]);
        displayBlock(errorMsg[element.fieldNumber]);
        errorMsg[element.fieldNumber].innerText = "Please provide a valid email address";
      }
      else {
        element.name.style.borderColor = "green";
        displayNone(errorImage[element.fieldNumber]);
        displayNone(errorMsg[element.fieldNumber]);
      }
    }
    else {
      if (element.name.value === "") {
        element.name.style.borderColor = "red";
        displayBlock(errorImage[element.fieldNumber]);
        displayBlock(errorMsg[element.fieldNumber]);
        errorMsg[element.fieldNumber].innerText = element.errorMsgText;
      }
      else {
        element.name.style.borderColor = "green";
        displayNone(errorImage[element.fieldNumber]);
        displayNone(errorMsg[element.fieldNumber]);
      }
    }
  })
})
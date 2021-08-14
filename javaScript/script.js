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

// function required(inputName , errorMsgText) {
//   if (inputName.value === "" || inputName.value == null) {
//     inputName.style.borderColor = "red";
//     displayBlock(errorMsg[0]);
//     displayBlock(errorImage[0]);
//     errorMsg[0].innerText = errorMsgText;
//   }
//   else {
//     inputName.style.borderColor = "green";
//     displayNone(errorMsg[0]);
//     displayNone(errorImage[0]);
//     errorMsg[0].innerText = "";
//   }
// }

form.addEventListener('submit', (e) => {

  e.preventDefault();
  let fields = [
    {name: fName, errMsg:'The first name cannot be empty' },
    {name: lName, errMsg:'Last Name can\'t be empty'},
    {name: email, errMsg:'Please provide a valid email'},
    {name: pass, errMsg:'Password can\'t be empty'},
  ]

 
  fields.forEach((ele, i)=> {
    if (ele.name == email) {
      if (email.value === "" || email.value == null) {
          email.style.borderColor = "red";
          displayBlock(errorMsg[2]);
          displayBlock(errorImage[2]);
          errorMsg[2].innerText = "Email can't be empty";
        }

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
          errorMsg[0].innerText = "";
        }
    } else {
      if (ele.name.value === "" || ele.name.value == null) {
        ele.name.style.borderColor = "red";
        displayBlock(errorMsg[i]);
        displayBlock(errorImage[i]);
        errorMsg[i].innerText = ele.errMsg;
      }
      else {
        ele.name.style.borderColor = "green";
        displayNone(errorMsg[i]);
        displayNone(errorImage[i]);
        errorMsg[i].innerText = "";
      }
    }
  })

  // if (fName.value === "" || fName.value == null) {
  //   fName.style.borderColor = "red";
  //   displayBlock(errorMsg[0]);
  //   displayBlock(errorImage[0]);
  //   errorMsg[0].innerText = "The first name cannot be empty";
  // }
  // else {
  //   fName.style.borderColor = "green";
  //   displayNone(errorMsg[0]);
  //   displayNone(errorImage[0]);
  //   errorMsg[0].innerText = "";
  // }
  // if (lName.value === "" || lName.value == null) {
  //   lName.style.borderColor = "red";
  //   displayBlock(errorMsg[1]);
  //   displayBlock(errorImage[1]);
  //   errorMsg[1].innerText = "Last Name can't be empty";
  // }
  // else {
  //   lName.style.borderColor = "green";
  //   displayNone(errorMsg[1]);
  //   displayNone(errorImage[1]);
  //   errorMsg[0].innerText = "";
  // }

  // if (email.value === "" || email.value == null) {
  //   email.style.borderColor = "red";
  //   displayBlock(errorMsg[2]);
  //   displayBlock(errorImage[2]);
  //   errorMsg[2].innerText = "Email can't be empty";
  // }


  // if (!email.value.match(emailRegex) && email.value !== "" && email.value != null) {
  //   email.style.borderColor = "red";
  //   displayBlock(errorMsg[2]);
  //   displayBlock(errorImage[2]);
  //   errorMsg[2].innerText = "Please provide a valid email";
  // }
  // if (email.value.match(emailRegex) && email.value !== "") {
  //   email.style.borderColor = "green";
  //   displayNone(errorMsg[2]);
  //   displayNone(errorImage[2]);
  //   errorMsg[0].innerText = "";
  // }

  // if (pass.value === "" || pass.value == null) {
  //   pass.style.borderColor = "red";
  //   displayBlock(errorMsg[3]);
  //   displayBlock(errorImage[3]);
  //   errorMsg[3].innerText = "Password can't be empty";
  // }
  // else {
  //   pass.style.borderColor = "green";
  //   displayNone(errorMsg[3]);
  //   displayNone(errorImage[3]);
  //   errorMsg[0].innerText = "";
  // }

})
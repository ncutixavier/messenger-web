const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('#submit').onclick = validate;
// });


// function validate(){
//     let name  = document.querySelector('#name').value
//     if(name.length < 0){
//         document.querySelector('#displayError').style.required = true
//         return false
//     }
// }
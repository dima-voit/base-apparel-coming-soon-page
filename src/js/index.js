const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const inputEmail = document.querySelector(".input");
const message = document.querySelector(".error__message");
const subscribeBtn = document.querySelector(".button");

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validate(reg, inputEmail.value)) {
    notValidEmail(inputEmail, message, "Please provide a valid email");
  } else {
    validEmail(inputEmail, message, "");
  }
})

function validate(regex, inputEmail) {
  return regex.test(inputEmail);
}

function notValidEmail(inputEmail, el, message) {
  inputEmail.classList.add("error");
  el.innerHTML = message;
}

function validEmail(inputEmail, el, message) {
  inputEmail.classList.remove("error");
  el.innerHTML = message;
}
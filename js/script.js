const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const firstNameErrEl = document.getElementById("err-first-name");
const lastNameErrEl = document.getElementById("err-last-name");
const emailErrEl = document.getElementById("err-email");
const passwordErrEl = document.getElementById("err-password");
const claimBtnEl = document.getElementById("claim-btn");
const singupFormEl = document.getElementById("signup-form");
const firstNameIconEerr = document.getElementById("first-name-icon-err");
const lastNameIconEerr = document.getElementById("last-name-icon-err");
const emailIconEerr = document.getElementById("email-icon-err");
const passwordIconEerr = document.getElementById("password-icon-err");


const normalValidation = (inputElement, err, iconErr) => {
  inputElement.style.border = " 1px solid  hsl(246, 25%, 77%)";
  err.innerHTML = "";
  iconErr.style.display = "none";
};
const activeValidation = (inputElement, iconErr) => {
  inputElement.style.border = " 1px solid hsl(0, 100%, 74%)";
  iconErr.style.display = "inline";
};
const passWordValidation = () => {
  //check empty password field
  if (passwordEl.value === "") {
    passwordErrEl.innerHTML = "Password cannot be empty";
    passwordEl.style.border = " 1px solid hsl(0, 100%, 74%)";
    passwordIconEerr.style.display = "inline";
    return false;
  }

  //minimum password length validation
  if (passwordEl.value.length < 8) {
    passwordErrEl.innerHTML = "Password length must be atleast 8 characters";
    passwordEl.style.border = " 1px solid hsl(0, 100%, 74%)";
    passwordIconEerr.style.display = "inline";
    return false;
  } else {
    passwordErrEl.innerHTML = "";
    passwordEl.style.border = " 1px solid hsl(246, 25%, 77%)";
    passwordIconEerr.style.display = "none";
    return true;
  }
};

const emailValidation = () => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailEl.value.match(validRegex)) {
    normalValidation(emailEl, emailErrEl, emailIconEerr);
    return true;
  } else {
    activeValidation(emailEl, emailIconEerr);
    emailErrEl.innerHTML = "Looks like this is not an email";
    emailEl.placeholder = "email@example/com";
    return false;
  }
};

const firstNameValidation = () => {
  if (firstNameEl.value === "") {
    activeValidation(firstNameEl, firstNameIconEerr);
    firstNameErrEl.innerHTML = "First Name cannot be empty";
    return false;
  } else {
    normalValidation(firstNameEl, firstNameErrEl, firstNameIconEerr);
    return true;
  }
};
const lastNameValidation = () => {
  if (lastNameEl.value === "") {
    activeValidation(lastNameEl, lastNameIconEerr);
    lastNameErrEl.innerHTML = "Last Name cannot be empty";
    return false;
  } else {
    normalValidation(lastNameEl, lastNameErrEl, lastNameIconEerr);
  }
};
const formValidation = () => {
  firstNameValidation();
  lastNameValidation();
  emailValidation();
  passWordValidation();
};

singupFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  formValidation();
});

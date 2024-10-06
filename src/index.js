import "./styles.css";
import {
  showEmailError,
  validateCountry,
  showZipcodeError,
  showPasswordError,
  validatePassword,
} from "./validation";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span");
const country = document.querySelector("#country");
const countryError = document.querySelector("#country + span");
const zipcode = document.querySelector("#zipCode");
const zipcodeError = document.querySelector("#zipCode + span");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span");
const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPassword + span");

countryError.textContent = "You must enter a country name";
confirmPasswordError.textContent = "You must confirm password";

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.style.display = "none";
  } else {
    showEmailError(email, emailError);
  }
});

country.addEventListener("input", () => {
  const errorMessage = validateCountry(country);
  country.setCustomValidity(errorMessage);
  countryError.textContent = errorMessage;
  if (country.validity.valid) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "";
  }
});

zipcode.addEventListener("input", () => {
  if (zipcode.validity.valid) {
    zipcodeError.style.display = "none";
  } else {
    showZipcodeError(zipcode, zipcodeError);
  }
});

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.style.display = "none";
  } else {
    showPasswordError(password, passwordError);
  }
});

confirmPassword.addEventListener("input", () => {
  const errorMessage = validatePassword(confirmPassword, password);
  confirmPassword.setCustomValidity(errorMessage);
  confirmPasswordError.textContent = errorMessage;
  if (confirmPassword.validity.valid) {
    confirmPasswordError.style.display = "none";
  } else {
    confirmPasswordError.style.display = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fields = [email, country, zipcode, password, confirmPassword];
  fields.forEach((field) => {
    field.classList.remove("highlight-invalid");
  });

  let firstInvalidField = null;

  if (!email.validity.valid) {
    showEmailError(email, emailError);
    email.classList.add("higlight-invalid");
    if (!firstInvalidField) firstInvalidField = email;
  }
  if (!country.validity.valid) {
    countryError.style.display = "";
    country.classList.add("highlight-invalid");
    if (!firstInvalidField) firstInvalidField = country;
  }
  if (!zipcode.validity.valid) {
    showZipcodeError(zipcode, zipcodeError);
    zipcode.classList.add("highlight-invalid");
    if (!firstInvalidField) firstInvalidField = zipcode;
  }

  if (!password.validity.valid) {
    showPasswordError(password, passwordError);
    password.classList.add("highlight-invalid");
    if (!firstInvalidField) firstInvalidField = password;
  }
  if (!confirmPassword.validity.valid) {
    confirmPasswordError.style.display = "";
    confirmPassword.classList.add("highlight-invalid");
    if (!firstInvalidField) firstInvalidField = confirmPassword;
  }

  if (firstInvalidField) {
    firstInvalidField.focus();
    setTimeout(() => {
      firstInvalidField.classList.remove("highlight-invalid");
    }, 1000);
  } else {
    const p = document.createElement("p");
    p.textContent = "High Five!! Form validation passed!!";
    form.after(p);
    setTimeout(() => {
      p.remove();
    }, 3000);
  }
});

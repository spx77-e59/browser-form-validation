function showEmailError(email, error) {
  if (email.validity.valueMissing) {
    error.textContent = "You must enter an email";
  }
  if (email.validity.tooShort) {
    error.textContent = `Email must have at least ${email.minLength} characters. You have ${email.value.length}`;
  }
  if (email.validity.tooLong) {
    error.textContent = `Email must have at most ${email.maxLength} characters. You have ${email.value.length}`;
  }
  if (email.validity.typeMismatch) {
    error.textContent = "Not a valid email";
  }
  error.style.display = "";
}

function validateCountry(country) {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const countryName = country.value.trim();
  if (countryName === "") {
    return "You must enter a country name";
  }
  const isValidCountry = countries.includes(countryName);
  if (!isValidCountry) {
    return "Invalid country name. Please enter a valid country name";
  }
  return "";
}

function showZipcodeError(zipcode, error) {
  if (zipcode.validity.patternMismatch) {
    error.textContent = "Invalid zipcode";
  }
  if (zipcode.validity.valueMissing) {
    error.textContent = "You must enter a zipcode";
  }
  error.style.display = "";
}

function showPasswordError(password, error) {
  if (password.validity.valueMissing) {
    error.textContent = "You must enter a password";
  }
  if (password.validity.tooShort) {
    error.textContent = `Password must have at least ${password.minLength} characters. You have ${password.value.length}`;
  }
  if (password.validity.tooLong) {
    error.textContent = `Password must have at most ${password.maxLength} characters. You have ${password.value.length}`;
  }
  error.style.display = "";
}

function validatePassword(confirmPassword, password) {
  if (confirmPassword.value.length === 0) {
    return "You must confirm password";
  }
  if (confirmPassword.value === password.value) {
    return "";
  }
  return "Passwords do not match";
}

export {
  showEmailError,
  validateCountry,
  showZipcodeError,
  showPasswordError,
  validatePassword,
};

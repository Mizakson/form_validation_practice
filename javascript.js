// form validation practice

const constraints = ['typeMismatch', 'valueMissing', 
'patternMismatch', 'tooShort', 'tooLong']

// email constants
const email = document.getElementById("mail")
const emailError = document.getElementById("email-error")
const emailMinLength = 3
const emailMaxLength = 254


// country consts
const country = document.getElementById("country")


// zip code consts
const zipCode = document.getElementById("zip-code")
function validateZipCode() {
  const zipCodeFormats = {
    "fo": ["^\\d{3}$", "Faroe Isalnds Zip Code Format: NNN"],
    "lv": ["^[Ll][Vv][- ]{0,1}\\d{4}$", "Latvia Zip Code Format: LV-NNNN"],
    "us": ["^\\d{5}(-{0,1}\\d{4})?$", "United States Zip Code Format: NNNNN (optionally NNNNN-NNNN)"]
  }

  const zipCodeCountry = country.value
  
  const constraint = new RegExp(zipCodeFormats[zipCodeCountry][0],"")
  console.log(constraint)

  if ((constraint.test(zipCode.value))) {
    zipCode.setCustomValidity("")
  } else {
    zipCode.setCustomValidity(zipCodeFormats[zipCodeCountry][1])
  }

}

// password consts
const password = document.getElementById("password")


// confirm password consts
const confirmPassword = document.getElementById("password-confirm")


// window.onload = () => {
//     country.onchange = validateZipCode()
//     zipCode.onchange = validateZipCode()
// }
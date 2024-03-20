// form validation practice

const constraints = ['typeMismatch', 'valueMissing', 
'patternMismatch', 'tooShort', 'tooLong']

// email constants
const email = document.getElementById("mail")
const emailError = document.getElementById("email-error")
const emailMinLength = 3
const emailMaxLength = 254

const validateEmail = (function() {
    emailError.textContent = ""
    emailError.className = "error active"

    email.addEventListener("input", (event) => {
        if (email.value === "") {
            emailError.textContent = "Please enter an email address."
        } else if (email.value.length < emailMinLength) {
            emailError.textContent = `Enter an email address greater than ${emailMinLength} characters.`
        } else if (email.value.length > emailMaxLength) {
            emailError.textContent = `Enter an email address greater than ${emailMaxLength} characters.`
        } else if (email.value.length > emailMinLength && email.value.length < emailMaxLength) {
            emailError.textContent = ""
        }
    })
})();


const country = document.getElementById("country")

// zip code consts
const zipCode = document.getElementById("zip-code")
const zipCodeFormats = {
    "fo": ["^\\d{3}$", "Faroe Islands Zip Code Format: NNN"],
    "lv": ["^[Ll][Vv][- ]{0,1}\\d{4}$", "Latvia Zip Code Format: LV-NNNN"],
    "us": ["^\\d{5}(-{0,1}\\d{4})?$", "United States Zip Code Format: NNNNN (optionally NNNNN-NNNN)"]
}


// password consts
const password = document.getElementById("password")


// confirm password consts
const confirmPassword = document.getElementById("password-confirm")



// form click event to check final validity and give user high five

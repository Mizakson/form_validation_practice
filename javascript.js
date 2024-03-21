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
        event.preventDefault()
        event.stopImmediatePropagation()
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
const zipCodeError = document.getElementById('zip-code-error')

const validateZipCode = (function () {
    country.addEventListener("click", (event) => {
        event.preventDefault()
        event.stopImmediatePropagation()
        let selectedCountry = country.value
        const selectedItem = zipCodeFormats[selectedCountry]
        console.log(selectedItem)

        zipCode.addEventListener("input", (event) => {
            event.preventDefault()
            event.stopImmediatePropagation()
            const regex = new RegExp(selectedItem[0],"")
            let result = regex.test(zipCode.value)

            if (result === false) {
                zipCodeError.textContent = selectedItem[1]
                zipCodeError.className = "error active"
            } else  {
                zipCodeError.textContent = ""
            }
        })        

    })

})();

// password consts
const password = document.getElementById("password")
// min 5 chars, at least one letter and number
const passwordRegex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
const passwordFormatMessage = "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and must be 8-16 characters long."
const passwordError = document.getElementById('password-error')

// confirm password consts
const confirmPassword = document.getElementById("password-confirm")
const confirmPasswordError = document.getElementById('password-confirm-error')
const passwordsMustMatch = "Passwords must match"

const validatePasswords = (function () {
    // first password
    password.addEventListener("input", (event) => {
        let firstPassword = password.value
        let result = passwordRegex.test(firstPassword)

        if (result === false) {
            passwordError.textContent = passwordFormatMessage
            passwordError.className = "error active"
        } else {
            passwordError.textContent = ""
            confirmPassword.addEventListener("input", (event) => {
                let secondPassword = confirmPassword.value
                if (firstPassword !== secondPassword) {
                    confirmPasswordError.textContent = passwordsMustMatch
                    confirmPasswordError.className = "error active"
                } else {
                    confirmPasswordError.textContent = ""
                }
            })
        }
    })
})();

// form click event to check final validity and give user high five

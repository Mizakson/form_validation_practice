function checkEmail() {
    const email = document.getElementById('email')
    email.type = 'email'
    
    const errorBox = document.getElementById('email-error')
    errorBox.className = "error active"
    
    const minLength = 3
    const maxLength = 254
    email.minLength = minLength
    email.maxLength = maxLength

    email.addEventListener("input", (event) => {
        event.preventDefault()
        event.stopImmediatePropagation()
        
        if (email.validity.valueMissing) {
            errorBox.textContent = "Empty field: please enter an email adress"
        }

        if (email.validity.tooShort) {
            errorBox.textContent = "Entered data too short, address must be at least 3 characters"
        }

        if (email.validity.tooLong) {
            errorBox.textContent = "Entered data too long, address must be at most 254 characters"
        }

        if (email.validity.typeMismatch) {
            errorBox.textContent = "Enter a valid email adress: example@mail.com"
        }

        if ((email.checkValidity())) {
            errorBox.textContent = ""
        }


    })

}

checkEmail()

const zipCodeFormats = {
    "de": ["^(D-)?\\d{5}$", "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",],
    "nl": ["^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$", "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS"]
}

function checkZipCode() {    

}

checkZipCode()


// password regex, consts
const passwordRegex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
const passwordFormatMessage = "Password must contain one digit from 1 to 9, one lowercase letter, \n one uppercase letter, one special character, no space, and must be 8-16 characters long."
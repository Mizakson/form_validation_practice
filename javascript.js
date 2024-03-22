// form validation practice

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


const zipCodeFormats = {
    "de": ["^(D-)?\\d{5}$", "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",],
    "nl": ["^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$", "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS"]
}

function checkZipCode() {    
    const country = document.getElementById('country')
    const countryErrorBox = document.getElementById('country-error')
    countryErrorBox.classList = "error active"

    const zip = document.getElementById('zip-code')
    const zipErrorBox = document.getElementById('zip-code-error')
    zipErrorBox.classList = "error active"

    country.addEventListener("change", (event) => {
        event.preventDefault()

        let activeCountry = country.value
        if (activeCountry === "none") {
            countryErrorBox.textContent = "Select a valid country"
            zipErrorBox.textContent = "Select a valid country"
        }
        if (activeCountry === "de" | activeCountry === "nl") {
            countryErrorBox.textContent = ""
            let msg = zipCodeFormats[activeCountry][1]
            zipErrorBox.textContent = msg
            let regex = new RegExp(zipCodeFormats[activeCountry][0],"")
            
            zip.oninput = () => {

                if ((regex.test(zip.value))) {
                    zipErrorBox.textContent = ""
                } else {
                    zipErrorBox.textContent = msg
                }

            }

        }        

    })
}

// password regex, consts
const passwordRegex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
const passwordFormatMessage = "Password must contain one digit from 1 to 9, one lowercase letter, \n one uppercase letter, one special character, no space, and must be 8-16 characters long."

function checkPassword() {
    const password = document.getElementById('password')
    password.type = "password"
    const passwordErrorBox = document.getElementById('password-error')
    passwordErrorBox.classList = "error active"

    const passwordConfirm = document.getElementById('password-confirm')
    passwordConfirm.type = "password"
    const passwordConfirmErrorBox = document.getElementById('password-confirm-error')
    passwordConfirmErrorBox.classList = "error active"

    password.addEventListener("input", (event) => {
        let first = password.value
        
        if ( (passwordRegex.test(first)) ) {
            passwordErrorBox.textContent = ""
        } else {
            passwordErrorBox.textContent = passwordFormatMessage
        }

    })

}


const init = (function() {
    checkEmail()
    checkZipCode()
    checkPassword()
})()
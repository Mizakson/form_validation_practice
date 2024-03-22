function checkEmail() {
    const email = document.getElementById('email')
    email.type = 'email'
    
    const errorBox = document.getElementById('email-error')
    errorBox.className = "error active"
    
    const minLength = 3
    const maxLength = 254
    email.min = minLength
    email.max = maxLength

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
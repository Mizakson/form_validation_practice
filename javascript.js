const email = document.getElementById("mail")
const country = document.getElementById("country")
const zipCode = document.getElementById("zip-code")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("password-confirm")

const constraints = ['typeMismatch', 'valueMissing', 
'patternMismatch', 'tooShort', 'tooLong']

const zipCodeFormats = {
    "FO, Faroe Islands": "NNN",
    "LV, Latvia": "LV-NNNN",
    "US, United States": "NNNNN (optionally NNNNN-NNNN)"
}

// zip code regexes
const faroeIslandsZipCodeRegex = new RegExp("^\\d{3}$")
const latviaZipCodeRegex = new RegExp("^[Ll][Vv][- ]{0,1}\\d{4}$")
const usaZipCodeRegex = new RegExp("^\\d{5}(-{0,1}\\d{4})?$")
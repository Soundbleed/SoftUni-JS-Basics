function validate(password) {

    function boolEnoughLength(pass) {
        return pass.length >= 6 && pass.length <= 10
    }

    let numberAmount = 0
    let hasLetters = false
    function boolHasDiggitsAndLetters(pass) {
        for (letter of pass) {
            let characterRepresent = letter.charCodeAt(0)

            if (characterRepresent >= 46 && characterRepresent <= 57) {
                numberAmount++
            }

            if (characterRepresent >= 65 && characterRepresent <= 122 || characterRepresent >= 46 && characterRepresent <= 57 ) {
                hasLetters = true
            } else {
                hasLetters = false; break;
            }
        }

        return hasLetters

        
    }

    function boolNotEnoughDigits() {

        if (numberAmount >= 2) {
            return true
        } else {
            return false
        }

    }

    if (boolEnoughLength(password) === false) {
        console.log("Password must be between 6 and 10 characters")
    }
    if (boolHasDiggitsAndLetters(password) === false) {
        console.log("Password must consist only of letters and digits");
    }
    if (boolNotEnoughDigits() === false) {
        console.log("Password must have at least 2 digits");
    }
    if (boolEnoughLength(password) && boolHasDiggitsAndLetters(password) && boolNotEnoughDigits()) {
        console.log("Password is valid")
    }

}

validate("Pa$s$s")
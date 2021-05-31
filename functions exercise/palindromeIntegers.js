function checkForPalindrome(arr) {

    for (number of arr){
        if (number === reverseNumber(number)) {
            console.log("true")
        } else {
            console.log("false")
        }
    }

    function reverseNumber(num){
        let reversedNumber = ""
        while (num > 0){
            lastDigit = num % 10
            num = Math.trunc(num/10)
            reversedNumber += lastDigit
        }
        return Number(reversedNumber)
    }

}
checkForPalindrome([123,323,421,121]);

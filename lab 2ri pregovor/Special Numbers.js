function Hello(num) {

    for (let i = 1; i <= num; i++) {

        let sum = 0
        let number = i
        while (number > 0) {
            currentNum = number % 10
            sum += currentNum
            number = Math.trunc(number / 10)
        }
        if (sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }

    }

}

Hello(15)
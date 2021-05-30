function Hello(num) {

    let shredNum = num
    let sum = 0
    let isAmazing = false

    while (shredNum > 0) {
        let currentNum = shredNum % 10
        sum += currentNum
        shredNum = Math.trunc(shredNum / 10)
    }

    while (sum > 0) {
        let currentNum = sum % 10
        if (currentNum === 9) {
            isAmazing = true
            break;
        }
        sum = Math.trunc(sum/10)
    }

    console.log(`${num} Amazing? ${isAmazing ? 'True': 'False'}`);
    

}

Hello(1233)
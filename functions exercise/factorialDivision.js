function solve(n1, n2) {

    
    let firstRes = fac(n1)
    let secRes = fac(n2)
    let finalRes = firstRes / secRes
    console.log(`${finalRes.toFixed(2)}`)
    
    // function factorial(number){
    //     let result = 1
    //     for (i = 1; i <= number; i++) {
    //         result *= i
    //     }
    //     return result
    // }

    function fac(number){

        if (number == 1) {
            return 1
        }

        return number * fac(number - 1)
    }
    
    

}

solve(6, 2)
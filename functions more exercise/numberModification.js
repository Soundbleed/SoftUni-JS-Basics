function solve(n) {

    let numArray = makeArrayOfSingleNumbers(n)
    let finalArray = addNine(numArray)
    console.log (finalArray.join(""))

    
    
    function addNine(array){
        while(!checkIfOver5(array)){
            array.push(9)
        }
        return array
    }
    
    
    function checkIfOver5(array){
        let result = 0
        for (number of array){
            result += number
        }
        if (result / array.length >= 5){
            return true
        }else {
            return false
        }
    }
    
    
    function makeArrayOfSingleNumbers(number) {
        let array = []
        while (number > 0) {
            let single = number % 10
            array.push(single)
            number = Math.trunc(number/10)
        }
        
        return array.reverse()
    }
}

solve(5835)
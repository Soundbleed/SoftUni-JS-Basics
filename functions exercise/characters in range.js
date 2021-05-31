function solve(char1, char2) {
    let number1 = getNumericValue(char1)
    let number2 = getNumericValue(char2)
    let start = Math.min(number1, number2)
    let end = Math.max(number1, number2)
    let elements = arrayOfMissingElements(start, end)
    let result = joinArray(elements, ' ')
    console.log(result)


    function getNumericValue(symbol) {
        return symbol.charCodeAt(0)
    }

    function getCharValue(number) {
        return String.fromCharCode(number)
    }

    function arrayOfMissingElements(min, max) {
        let arr = [];
        for (i = min + 1; i < max; i++) {
            let char = getCharValue(i)
            arr.push(char)
        }
        return arr;
    }

    function joinArray(arr, joiner){
        return arr.join(joiner);
    }

}

solve('A', 'Z')
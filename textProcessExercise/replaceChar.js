function solve(input) {

    let result = ''
    for (let i = 0; i < input.length; i++){
        let firstChar = input[i]
        let secondChar = input[i + 1]
        if (firstChar !== secondChar){
            result += firstChar
        }
    }

    console.log(result)

}

solve('aaaaabbbbbcdddeeeedssaa')
function solve(numOne, numTwo, operator){

    let result = null

    switch(operator){
        case 'multiply': result = (a,b) => a*b; break;
        case 'divide': result = (a,b) => a/b; break;
        case 'add': result = (a,b) => a+b; break;
        case 'subtract': result = (a,b) => a-b; break;
    }

    let operation = result (numOne, numTwo)

    console.log(operation);

}

solve (5, 5, 'multiply')
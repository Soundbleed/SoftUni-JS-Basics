function solve(array) {

    let result = 0

    for (i = 0; i < array.length; i++) {
        switch (array[i]) {
            case "soap": result += 10; break;
            case "water": result *= 1.2; break;
            case "vacuum cleaner": result *= 1.25; break;
            case "mud": result = result - (result * 0.1); break;
        }
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`)

}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
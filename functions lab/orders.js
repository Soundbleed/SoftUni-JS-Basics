function solve(product, quanity) {

    let coffee = 1.50
    let water = 1.00
    let coke = 1.40
    let snacks = 2.00
    let result = 0

    switch (product) {
        case 'coffee': result = coffee * quanity;break;
        case 'water': result = water * quanity;break;
        case 'coke': result = coke * quanity;break;
        case 'snacks': result = snacks * quanity;
    }

    console.log(result.toFixed(2));
}

solve('water', 5)
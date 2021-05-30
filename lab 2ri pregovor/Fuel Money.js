function Hello (distance, people, price1l) {

    let fuel = (distance / 100) * 7 
    fuel = fuel + people * 0.1
    let price = fuel * price1l

    console.log(`Needed money for that trip is ${price}lv.`);
}

Hello (260, 9, 2.49)
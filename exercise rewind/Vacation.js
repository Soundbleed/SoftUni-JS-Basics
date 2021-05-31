function Hello(numPeople, type, day) {
    let perPerson = 0
    let total = 0
    switch (type) {
        case "Students": switch (day) {
            case "Friday": perPerson = 8.45; break;
            case "Saturday": perPerson = 9.80; break;
            case "Sunday": perPerson = 10.46; break;
        } break;

        case "Business": switch (day) {
            case "Friday": perPerson = 10.90; break;
            case "Saturday": perPerson = 15.60; break;
            case "Sunday": perPerson = 16; break;
        } break;

        case "Regular": switch (day) {
            case "Friday": perPerson = 15; break;
            case "Saturday": perPerson = 20; break;
            case "Sunday": perPerson = 22.5; break;
        } break;
    }

    if (type === "Business" && numPeople >= 100) {
        numPeople -= 10
    }

    total = numPeople * perPerson

    if (type === "Students" && numPeople >= 30) {
        total = total * 0.85
    } else if (type === "Regular" && numPeople >= 10 && numPeople <= 20){
        total = total * 0.95
    }

    console.log (`Total price: ${total.toFixed(2)}`)

}

Hello(30,
    "Students",
    "Sunday"
)
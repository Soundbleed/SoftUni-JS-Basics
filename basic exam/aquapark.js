function aquaparkPrices(month, hoursSpent, peopleCount, timeOfDay) {

    let pricePerHour = 0

    switch (month) {
        case 'march': 
        case 'april':
        case 'may':
            switch (timeOfDay){
            case 'day': pricePerHour = 10.5; break;
            case 'night': pricePerHour = 8.4; break;
        } break;
        case 'june':
        case 'july':
        case 'august':
            switch (timeOfDay){
            case 'day': pricePerHour = 12.6; break;
            case 'night': pricePerHour = 10.2; break;
        } break;
    }

    if (peopleCount >= 4){
        pricePerHour *= 0.9
    }

    if (hoursSpent >= 5){
        pricePerHour *= 0.5
    }

    let total = pricePerHour * (hoursSpent * peopleCount)

    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`)
    console.log(`Total cost of the visit: ${total.toFixed(2)}`)

}

aquaparkPrices('march',
    5,
    4,
    'night'
)
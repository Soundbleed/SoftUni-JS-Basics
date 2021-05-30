function solve(tempStock, deliveries) {

    let allstock = []

    for (let i = 0; i < tempStock.length; i++) {
        let name = tempStock[i];
        i++
        let quanity = Number(tempStock[i])
        let obj = {}
        obj.name = name
        obj.quanity = quanity
        allstock.push(obj)
    }

    for (let i = 0; i < deliveries.length; i++) {
        let name = deliveries[i];
        i++
        let quanity = Number(deliveries[i])
        let exists = false
        for (element of allstock) {
            if (element.name === name) {
                exists = true
                element.quanity += quanity
            }
        }
        if (!exists) {
            let obj = {}
            obj.name = name
            obj.quanity = quanity
            allstock.push(obj)
        } 
    }

    allstock.forEach(a => console.log(`${a.name} -> ${a.quanity}`))


}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
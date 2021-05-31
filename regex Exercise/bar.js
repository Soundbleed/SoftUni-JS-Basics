function solve(arr) {

    let regex = /%(?<name>[A-Z][a-z]+)%([^%\|$\.]+)?<(?<product>\w+)>([^%|$\.]+)?\|(?<quantity>[\d]+)\|([^%|$\.\d]+)*?(?<price>[0-9]+(\.[0-9]+)?)\$/

    let line = arr.shift()
    let total = 0

    while (line !== 'end of shift') {
        let match = regex.exec(line)
        let productPrice = (Number(match.groups.quantity) * Number(match.groups.price))
        console.log(`${match.groups.name}: ${match.groups.product} - ${productPrice.toFixed(2)}`)
        total += productPrice
        line = arr.shift()
    }
    console.log(`Total income: ${total.toFixed(2)}`)
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
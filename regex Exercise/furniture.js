function solve(arr) {

    console.log('Bought furniture:')
    let total = 0
    for (line of arr) {
        let regex = />>(?<item>[A-za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/

        let result = regex.exec(line)
        if (result !== null) {
            total += Number(result.groups.price) * Number(result.groups.quantity)
            console.log(result.groups.item)
        }
        
    }

    console.log(`Total money spend: ${total.toFixed(2)}`)
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
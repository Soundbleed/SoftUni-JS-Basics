function solve(input){
    
    let parkingLot = new Map;

    for (el of input){
        let [command, carNumber] = el.split(", ")
        if (command === "IN"){
            parkingLot.set(carNumber)
        } else {
            parkingLot.delete(carNumber)
        }
    }

    let sorted = Array.from(parkingLot.keys()).sort((a,b) => a.localeCompare(b))
    console.log(sorted.join('\n'))

}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
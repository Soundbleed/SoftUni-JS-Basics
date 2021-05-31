function solve(name, lastName, hairColor){
    let person = {name: name, lastName: lastName, hairColor: hairColor}
    let converted = JSON.stringify(person)
    console.log(converted)

}

solve('George',
'Jones',
'Brown'
)
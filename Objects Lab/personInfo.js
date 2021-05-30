function solve(name, name2, justNumber) {
    let person = {}

    person.firstName = name
    person.lastName = name2
    person.age = Number(justNumber)

    for (key in person) {
        console.log(`${key}: ${person[key]}`)
    }

}

solve("Peter",
    "Pan",
    "20"
)
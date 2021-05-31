function solve(input) {
    let adressBook = {};

    for (line of input) {
        let [name, adress] = line.split(":");
        adressBook[name] = adress;
    }

    let sorted = Object.entries(adressBook)
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    let sortedAdressBook = {};

    for (element of sorted){
        sortedAdressBook[element[0]] = element[1];
    }

    for (key in sortedAdressBook){
        console.log(`${key} -> ${sortedAdressBook[key]}`)
    }


}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)
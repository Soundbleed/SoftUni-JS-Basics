function solve(arr){
    let objects = []

    arr.forEach(element => {
        let obj = {}
        obj.name = element
        obj.number = element.length
        objects.push(obj)
    });

    objects.forEach(obj => {
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`)
    })
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
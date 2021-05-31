function solve(input){
let students = {}

for (let line of input){
    let [name, phone] = line.split(" ")
    students[name] = phone
}

for (key in students){
    console.log(`${key} -> ${students[key]}`)
}


}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)
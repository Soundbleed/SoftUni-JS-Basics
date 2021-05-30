function solve(arr){

    let going = []
    let noAccess = []

    for (element of arr){
        let name = element.split(" ")[0]
        if (!element.includes("not")){
            if (!going.includes(name)){
                going.push(name)
            } else {
                console.log(`${name} is already in the list!`)
            }   
        } else {
            if (going.includes(name)){
                let index = going.indexOf(name)
                going.splice(index,1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(going.join("\n"))

}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)
function solve(inputArr){

    class Cat {
        constructor(name, age){
            this.name = name
            this.age = age
        }
        makeSound(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
        
    }


    let catArr = []

    for (let element of inputArr) {
        let [name, age] = element.split(" ")
        let cat = new Cat(name, Number(age))
        catArr.push(cat)
    }

    catArr.forEach(x => x.makeSound())
    
    
    

}

solve(['Mellow 2', 'Tom 5'])
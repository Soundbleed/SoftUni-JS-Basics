function solve(input){

    let arr = input.split(" ");
    let collection = new Map

    for(word of arr){
        word = word.toLowerCase()
        if (collection.has(word)){
            collection.set(word.toLowerCase(), collection.get(word) + 1)
        } else{
            collection.set(word.toLowerCase(), 1)
        }
    }

    let arr2 = []
    for (let [key, value] of collection){
        if (value % 2 === 0){
            collection.delete(key)
        } else {
            arr2.push(key)
        }
    }
    console.log(arr2.join(" "))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
function solve(input){

    let storage = {};

    for(line of input){
        let[product,qnty] = line.split(" ");
        qnty = Number(qnty);
        if (storage.hasOwnProperty(product)){
            let existing = qnty;
            storage[product] = storage[product] + existing
        } else {
            storage[product] = qnty
        }    
    }

    for(key in storage){
        console.log(`${key} -> ${storage[key]}`)
    }
    

}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)
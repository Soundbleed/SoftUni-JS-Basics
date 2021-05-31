function solve(input){

    let guestList = new Map
    let guest = input.shift();

    while(guest !== "PARTY"){       
        if (!isNaN(guest[0])){
            guestList.set(guest, "VIP")
        } else {
            guestList.set(guest, "Regular")
        }
        guest = input.shift();
    }
    
    for (el of input){
        if(guestList.has(el)){
            guestList.delete(el)
        }
    }
    console.log(guestList.size)
    for (let [key, value] of guestList){
        console.log(key)
    }
}


solve(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)
function solve(arr) {

    let text = arr[0]
    let newArr = []
    let element = ""


    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            newArr.push(element)
            element = ''
            continue;
        }
        else if (text[i] === '|') {
            newArr.push(element)
            element = ''
            continue;
        }
        element += text[i]
        if (i === text.length - 1) {
            newArr.push(element)
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 !== 0) {
            newArr[i] = Number(newArr[i])
        }
    }

    let health = 100
    let coins = 0
    let room = 0
    let i = 0

    while (i < newArr.length) {
        let condition = newArr[i]
        i++
        let num = newArr[i]
        i++
        room++
        switch (condition){
            case 'potion':
            if (health + num > 100){
                console.log(`You healed for ${100 - health} hp.`)
                health = 100 
                console.log(`Current health: ${health} hp.`) 
            } else {
                console.log(`You healed for ${num} hp.`)
                health+= num
                console.log(`Current health: ${health} hp.`) 
            } break;
            case 'chest':
                console.log(`You found ${num} coins.`);
                coins+=num; 
                break;
            default:
                health-=num;
                if (health > 0){
                    console.log(`You slayed ${condition}.`)  
                } else {
                    console.log(`You died! Killed by ${condition}.`);
                    console.log(`Best room: ${room}`)
                    return;
                } 
        }
    }
    if ( i === newArr.length && health > 0){
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }

}

solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])
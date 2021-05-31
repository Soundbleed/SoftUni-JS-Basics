function Hello(mass) {
    let bitcoin = 11949.16
    let gramGold = 67.51
    let day = 0
    let money = 0
    let bitcoinsBought = 0
    let isFirst = false
    let firstDay

    for (let i = 0; i < mass.length; i++) {
        let goldMined = Number(mass[i])
        day++
        goldMined *= gramGold
        if ((i+1) % 3 === 0 && i !== 0) {
            goldMined *= 0.7
        }
        money+= goldMined
        if (money >= bitcoin && isFirst === false) {
            let temp = Math.floor(money / bitcoin)
            bitcoinsBought += temp
            goldMined = money - temp * bitcoin
            isFirst = true
            firstDay = day
            money = goldMined
           
        } else if (money >= bitcoin && isFirst === true){
            let temp = Math.floor(money / bitcoin)
            bitcoinsBought += temp
            goldMined = money - temp * bitcoin
            money = goldMined
        } 
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`)
    if ( isFirst === true){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)

}

Hello([100, 200, 300])
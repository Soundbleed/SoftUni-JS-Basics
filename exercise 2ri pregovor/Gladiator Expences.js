function Hello(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0
    let shieldBreaksCount = 0
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i >= 6) {
            expenses += shieldPrice + swordPrice + helmetPrice
            shieldBreaksCount++
            if (shieldBreaksCount % 2 === 0 && shieldBreaksCount >= 2) {
                expenses += armorPrice
            }
        } else if (i % 2 === 0 && i >= 2) {
            expenses += helmetPrice
        } else if (i % 3 === 0 && i >= 3) {
            expenses += swordPrice
        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)

}

Hello(23,
    12.50,
    21.50,
    40,
    200
)
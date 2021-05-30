function Hello(base, incr) {

    let step = 0
    let allStones = 0
    let allMarable = 0
    let allLapis = 0
    let gold = 0

    for (let i = base; i > 0; i -= 2) {
        step++
        let allMaterial = i * i
        if (i <= 2) {
            gold = allMaterial;
            break;
        }
        let stones = (i - 2) * (i - 2)
        allStones = allStones + stones * incr
        let marable = allMaterial - stones

        if (step % 5 === 0) {
            marable = 0
            let lapis = allMaterial - stones
            allLapis = allLapis + lapis * incr
        }
        allMarable = allMarable + marable * incr
    }

    console.log(`Stone required: ${Math.ceil(allStones)}`)
    console.log(`Marble required: ${Math.ceil(allMarable)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(allLapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(step * incr)}`)

}

Hello(12.5, 1)
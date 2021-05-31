function solve(arr) {
    let heroes = []
    for (element of arr) {
        let hero = {}
        let [name, level, items] = element.split(" / ")
        items = items.split(", ")
        .sort((a,b) => a.localeCompare(b))
        .join(", ")
        hero.name = name
        hero.level = Number(level)
        hero.items = items
        heroes.push(hero)
    }

    heroes.sort((a, b) => a.level > b.level ? 1 : - 1)
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)   
    });

}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)
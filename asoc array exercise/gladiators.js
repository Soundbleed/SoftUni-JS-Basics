function solve(input) {

    let tier = {}
    let command = input.shift()

    while (command !== "Ave Cesar") {

        if (!command.includes("vs")) {
            let [gladiator, technique, skill] = command.split(" -> ")
            skill = Number(skill)

            if (!tier.hasOwnProperty(gladiator)) {
                tier[gladiator] = { [technique]: skill }
            } else if (tier[gladiator].hasOwnProperty(technique)) {
                if (skill > tier[gladiator][technique]) {
                    tier[gladiator][technique] = skill
                }
            } else if (!tier[gladiator].hasOwnProperty(technique) && tier.hasOwnProperty(gladiator)) {
                tier[gladiator][technique] = skill
            }

        } else if (command.includes("vs")) {
            let [gladiator1, gladiator2] = command.split(" vs ");
            if (!tier.hasOwnProperty(gladiator1) || !tier.hasOwnProperty(gladiator2)) {
                command = input.shift()
                continue;
            }

            gladiator1Techniques = Object.keys(tier[gladiator1]);
            gladiator2Techniques = Object.keys(tier[gladiator2]);

            for (technique of gladiator1Techniques) {
                if (gladiator2Techniques.includes(technique)) {
                    if (tier[gladiator1][technique] > tier[gladiator2][technique]) {
                        delete tier[gladiator2];
                    } else {
                        delete tier[gladiator1];
                    }

                }
            }
        }
        command = input.shift()
    }
    let entries = Object.entries(tier)
    for ([key, value] of entries) {
        let totalSkill = 0
        let skillPoints = Object.values(value)
        for (skp of skillPoints) {
            totalSkill += skp
        }
        tier[key]["AllSKill"] = totalSkill
    }

    entries.sort(compareSkill)

    for (hero of entries) {
        let heroName = hero[0]
        let allSpells = Object.entries(hero[1])
        let maxSkill = allSpells.pop()[1]
        allSpells.sort((a, b) => {
            
            let result = (b[1] - a[1] || a[0].localeCompare(b[0]))
            return result;
    })
    console.log(`${heroName}: ${maxSkill} skill`)
    for (spell of allSpells) {
        console.log(`- ${spell[0]} <!> ${spell[1]}`)
    }
}

function compareSkill([nameA, gladiatorA], [nameB, gladiatorB]) {

    let result = (gladiatorB.AllSKill - gladiatorA.AllSKill || nameA - nameB);
    return result;


}

}

solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
)
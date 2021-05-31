function solve(arr) {

    let actions = {
        Plunder(cities, townName, people, gold){
            let city = cities[townName]
            city.pop -= people
            city.gold -= gold

            console.log(`${townName} plundered! ${gold} gold stolen, ${people} citizens killed.`)

            if ( city.pop === 0 || city.gold === 0){
                delete cities[townName];
                console.log(`${townName} has been wiped off the map!`)
            }
        },
        Prosper(cities, townName, gold){
            let city = cities[townName]
            if (gold < 0){
                console.log(`Gold added cannot be a negative number!`)
            } else{
                city.gold += Number(gold)
                console.log(`${gold} gold added to the city treasury. ${townName} now has ${city.gold} gold.`)
            }
        }
    }

    let cities = {}
    let command = arr.shift();
    while (command !== 'Sail') {

        let [name, pop, gold] = command.split('||');
        if (!cities.hasOwnProperty(name)) {
            cities[name] = {pop: 0, gold: 0}
        }

        cities[name].pop += Number(pop);
        cities[name].gold += Number(gold);

        command = arr.shift();

    }

    command = arr.shift();

    while (command !== 'End'){
        let [task, city, ...params] = command.split('=>')
        actions[task](cities, city, params[0], params[1]);
        command = arr.shift();
    }

    let sorted = Object.entries(cities).sort(compareFunc)


    function compareFunc(townA, townB){
        nameA = townA[0]
        goldA = townA[1].gold
        nameB = townB[0]
        goldB = townB[1].gold
        return goldB - goldA || nameA.localeCompare(nameB);
    }

    if (sorted.length > 0){
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`)
        for([key,value] of sorted){
            console.log(`${key} -> Population: ${value.pop} citizens, Gold: ${value.gold} kg`)
        }
    } else{
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}

solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ]
)
function upgrade(arr) {
    let inventory = arr.shift()
    inventory = inventory.split(" ")
    for (element of arr) {
        let item = element.split(" ")[1]
        if (element.includes("Buy") && !arr.includes(item)) {
            inventory.push(item)
        } else if (element.includes("Trash") && inventory.includes(item)) {
            let index = inventory.indexOf(item)
            inventory.splice(index, 1)
        } else if (element.includes("Repair") && inventory.includes(item)) {
            let index = inventory.indexOf(item)
            let repaired = inventory.splice(index, 1)
            inventory.push(repaired[0])
        } else if (element.includes("Upgrade")) {
            let command = element.split("-")[0]
            let upgrade = element.split("-")[1]
            let item = command.split(" ")[1]
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item)
                inventory.splice(index + 1, 0, `${item}:${upgrade}`)
            }
        }
    }

    console.log(inventory.join(" "))

}

upgrade(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)
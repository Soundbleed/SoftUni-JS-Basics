function solve([line]) {

    let emojiregex = /(\*\*|::)[A-z][a-z]{2,}\1/g
    let digiregex = /\d/g
    let allDigits = line.match(digiregex);
    let coolFactor = allDigits.reduce((a, b) => a * b, 1)
    console.log(`Cool threshold: ${coolFactor}`)

    let allEmoji = line.match(emojiregex);
    let allCoolEmojis = {}

    for (el of allEmoji) {
        let emoji = el.slice(2, -2);
        let emojiFactor = 0
        for (let i = 0; i < emoji.length; i++) {
           emojiFactor += emoji.charCodeAt(i)
        }
        if (emojiFactor >= coolFactor){
            allCoolEmojis[el] = emojiFactor
        }
    }

    let keys = Object.keys(allCoolEmojis);
    console.log(`${allEmoji.length} emojis found in the text. The cool ones are:`)
    for (key of keys){
        console.log(key)
    }

}

solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
])
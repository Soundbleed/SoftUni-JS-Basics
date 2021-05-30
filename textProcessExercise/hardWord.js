function solve(input) {

    let snt = input[0].split(' ')
    let words = input[1]
    let test = '_'.repeat(words[0].length)

    // check every word length count for snt _ count 
    // replace _ with word if match
    // start next iteration from the new variable

    for (word of words) {
        for (let i = 0; i< snt.length; i++) {
            let el = snt[i]
            if (el.includes(',') && el.includes('_')){
                let index = el.indexOf(',')
                if (index > 0){
                    el = el.substring(0, index)
                }else {
                    el = el.substring(1)
                }
            }
            if (el.includes('.') && el.includes('_')){
                let index = el.indexOf('.')
                if (index > 0){
                    el = el.substring(0, index)
                }else {
                    el = el.substring(1)
                }
            }
            if (el === '_'.repeat(word.length)) {
                snt[i] = word
            }
        }
    }
    snt = snt.join(' ')
    console.log(snt)

}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['glad', 'pie', 'bring', 'During', 'amazing', 'pharmacist', 'sprained']]
)
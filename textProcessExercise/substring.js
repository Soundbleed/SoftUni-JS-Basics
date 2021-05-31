function solve(word, sentance){
    word = word.toLowerCase()
    sentance = sentance.toLowerCase().split(" ")
    if( sentance.includes(word)){
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }

}
////////........yfutdu
solve('javascript',
'JavaScript is the best programming language'
)
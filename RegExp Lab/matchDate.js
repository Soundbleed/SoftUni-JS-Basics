function solve([text]){

let patern = /\b(?<day>\d{2})([-, ., \/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g
// let results = patern.exec(text)

while ((results = patern.exec(text)) !== null){
   let day = results.groups.day
   let month = results.groups.month
   let year = results.groups.year
   console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
}


}

solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
  ])
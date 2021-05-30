function solve(arr) {
    let movies = []
    for (command of arr) {
        if (command.includes("addMovie")){
            let movie = {}
            movie.name = command.substring(9)
            movies.push(movie)
        } else if (command.includes("directedBy")){
            let [movieName, director] = command.split(" directedBy ")
            let myMovie = movies.find(movie => movie.name === movieName)
                if (myMovie){
                    myMovie.director = director
                }

        } else if (command.includes("onDate")){
            let [movieName, date] = command.split(" onDate ")
            for (movie of movies){
                if (movie.name === movieName){
                    movie.date = date
                }
            }
        }
    }

    movies.forEach(a => {
        if (a.name && a.date && a.director){
            console.log(JSON.stringify(a))
        }
    })

}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)
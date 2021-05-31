function solve(inputArr) {
    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name,
                this.time = time


        }
    }
    let playlist = []
    let length = inputArr.shift()
    let type = inputArr.pop()

    for (let element of inputArr) {
        let [typeList, name, time] = element.split("_")
        let song = new Songs(typeList, name, time)
        playlist.push(song)
    }

    for (object of playlist) {
        if (object.typeList === type || type === 'all') {
            console.log(object.name)
        }
    }
}

solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])
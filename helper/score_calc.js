function scoreDelta(learned) {
    var delta = 0
    switch(learned) {
        case "easy":
            delta = 20
            break
        case "ok":
            delta = 10
            break
        case "hard":
            delta = -20
            break
        default:
            delta = 0
    }
    return delta
}

module.exports = scoreDelta;
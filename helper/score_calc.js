function newScore(currScore, currResponse, lastResponse = "", lastLearned = Date.now()){
    const n = currScore + scoreDelta(currResponse)
    return parseInt(n)
}

function scoreDelta(currResponse) {
    var delta = 0
    switch (currResponse) {
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

// the boundaries: do not allow going under 0 or over 100 
function boundaries(delta, score) {
    let s = delta + score
    s = s > 100 ? 100 : s
    s = s < 0 ? 0 : s
    return s
}

    // Ideas for making this learning score caluclation smarter
    // the double whammy: second time same response has a different effect
    // the decay: check the updated at and reduce delta by % depending on how long it has been since studied


module.exports = {
    newScore,
    scoreDelta,
    boundaries
}

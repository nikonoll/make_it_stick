function newScore(currScore, currResponse, lastResponse = "", lastLearned = Date.now()) {
    let n = boundaries(currScore, scoreDelta(currResponse))
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
// the decay: check the updated at and reduce delta by 5 per day
function decay(score, lastLearned) {
    const now = new Date()
    const diff = diffDays(now, lastLearned)
    if (diff != 0) {
        return (score - (diff * 5))
    }

    return score
}

function diffDays(now, lastLearned) {
   return parseInt((now.getTime() - lastLearned.getTime()) / (1000 * 3600 * 24))
}

module.exports = {
    newScore,
    scoreDelta,
    boundaries,
    decay
}

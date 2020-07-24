// This be the defining logic for the order in which to study
// For each user this queue is calculated and stored in the db(?)
// Recalculated on every call?
// Calculation on the fly too slow/heavy?
// The queue should have a good mix of hard, mid and easy cards. New cards could be counted as hard.
function buildQueue(cardsWithScores) {
    return [2,1]
}

let lala = [
    {
        cardId: 1,
        score: 20
    },
    {
        cardId: 2,
        score: 20
    },
    {
        cardId: 3,
        score: 20
    },
    {
        cardId: 4,
        score: 20
    },
    {
        cardId: 5,
        score: 20
    },
]


module.exports = {
    buildQueue
}
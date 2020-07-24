import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// This be the defining logic for the order in which to study
// For each user this queue is calculated and stored in the db(?)
// Recalculated on every call?
// Calculation on the fly too slow/heavy?
// The queue should have a good mix of hard, mid and easy cards. New cards could be counted as hard.
function buildQueue(cardsWithScores) {
    const c = [2,1]
    return c
}

// Some functions to build the 4 stacks and store them in the DB
// for the full stack: sort the deck in 4
// for a single card: which stack does this belong into
// stack_ids: "new": 0 and lastStudied = nil, "hard": score < 20, "ok", "easy" > 80
function chooseStack(cardWithScore) {
    return newCards
}

const nextCard = async (deckId) => {
    const c = await prisma.card.findMany({
        where: { 
            AND: [
                { deckId: parseInt(deckId) },
                { repScore:
                    { gte: 0 }
                },
            ]
        }
    })
    const length = c.length
    const random = Math.floor(Math.random() * length)
    return c[random]
}

module.exports = {
    buildQueue,
    nextCard
}
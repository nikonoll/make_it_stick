function cardResponse(response) {
    v = (["easy", "ok", "hard"].includes(response)) ? true : false
    return v
}

module.exports = {
    cardResponse
}
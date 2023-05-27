const req = require('./request.js')
const url = "https://rolimons.com"
const tradeads = "/tradeadsapi/getrecentads"

async function getTradeAds() {
    const reponse = await req.request(url + tradeads)
    return response['data'].trade_ads
}

module.exports = { // Export functions
    getTradeAds
}

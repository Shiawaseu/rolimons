const req = require('./request.js')

const tradeads = "https://api.rolimons.com/tradeads/v1/getrecentads"

const tagMapping = {
    "1": "Demand",
    "2": "Rares",
    "3": "Robux",
    "4": "Any",
    "5": "Upgrade",
    "6": "Downgrade",
    "7": "Rap",
    "8": "Wishlist",
    "9": "Projecteds",
    "10": "Adds"
}

async function translate(arr) {
    const translated = arr.map(array => {
        const updatedArray = array.slice();

        if (Array.isArray(updatedArray[5]?.tags)) {
            updatedArray[5].tags = updatedArray[5].tags.map(tag => tagMapping[tag] || tag);
        }
        return updatedArray;
    });
    return translated
}

async function getTradeAds() {
    const response = await req.request(tradeads)
    const tradejson = response['data'].trade_ads
    let translated = await translate(tradejson)
    let trades = []
    let count = 0
    for (let x of translated) {
       let obj = []
       obj.posted = translated[count][1]
       obj.userid = translated[count][2]
       obj.username = translated[count][3]
       obj.offer = translated[count][4]
       obj.request = translated[count][5]
       trades.push(obj)
       count = count + 1
    }
    return trades
}

module.exports = { 
    getTradeAds
}

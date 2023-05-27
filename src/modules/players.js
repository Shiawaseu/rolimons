const req = require('./request.js')
const cheerio = require('cheerio')

const website = "https://rolimons.com"
const leaderboard = website + "/leaderboard/"
const playerapi = website + "/playerapi/player/"

async function getPlayer(userID) {
    let player = await req.request(playerapi + userID)
    return player['data']
}

async function getLeaderboard(page) {
    if (!page || page > 20) {
        return undefined
    }
    let players = []
    let count = 1
    const request = await req.request(leaderboard + page)
    const parsed = cheerio.load(request['data'])
    parsed('#page_content_body > div.d-flex.justify-content-between.flex-wrap.px-3.mt-3').each((i, e) => {
        for (let x = 0; x < 50; x++) {
            var id = parseInt(parsed(e).find(`div:nth-child(${count}) > a`).attr('href').replace("/player/", ''))
            var name = parsed(e).find(`div:nth-child(${count}) > a > div:nth-child(1) > h6`).text()
            var rank = parsed(e).find(`div:nth-child(${count}) > a > div.px-2.pt-1 > div:nth-child(1) > div:nth-child(2) > span`).text()
            var value = parsed(e).find(`div:nth-child(${count}) > a > div.px-2.pt-1 > div:nth-child(2) > div:nth-child(2) > span`).text()
            var rap = parsed(e).find(`div:nth-child(${count}) > a > div.px-2.pt-1 > div:nth-child(3) > div:nth-child(2) > span`).text()
            players.push({
                id,
                name,
                rank,
                value,
                rap
            })
            count = count + 1
        }
    })
    return players
}

module.exports = { // Export functions
    getPlayer,
    getLeaderboard
}

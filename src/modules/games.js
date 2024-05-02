const req = require("./request.js")
const cheerio = require('cheerio')

const url = "https://www.rolimons.com/game/"

async function getInfo(gameID) {
    try {
        let data = [] 

        const request = await req.request(url + gameID)
        const parsed = cheerio.load(request['data'])

        
        data['name'] = parsed('#page_content_body > div.mt-3.mx-3.d-flex.justify-content-between.flex-wrap > h1').text()
        data['creator_name'] = parsed('a.stat-data').text()
        data['created'] = parsed("#page_content_body > div.container-fluid.mt-2.px-0 > div > div.col-12.col-lg-4.col-xl-4.px-0 > div > div > div.d-flex.justify-content-around.justify-content-lg-start.pt-3.pb-4.px-5.px-sm-4.flex-wrap > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div.stat-data").text()
        data['max_players'] = parsed("#page_content_body > div.container-fluid.mt-2.px-0 > div > div.col-12.col-lg-4.col-xl-4.px-0 > div > div > div.d-flex.justify-content-around.justify-content-lg-start.pt-3.pb-4.px-5.px-sm-4.flex-wrap > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div.stat-data").text()
        data['genre'] = parsed("#page_content_body > div.container-fluid.mt-2.px-0 > div > div.col-12.col-lg-4.col-xl-4.px-0 > div > div > div.d-flex.justify-content-around.justify-content-lg-start.pt-3.pb-4.px-5.px-sm-4.flex-wrap > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div.stat-data").text()
        data['players'] = parsed('#page_content_body > div.game_stats_grid.mx-sm-3.mt-3 > div:nth-child(1) > div:nth-child(2) > div.game_stat_data').text()
        data['vists'] = parsed('#page_content_body > div.game_stats_grid.mx-sm-3.mt-3 > div:nth-child(2) > div:nth-child(2) > div.game_stat_data').text()
        data['likes'] = parsed('#page_content_body > div.game_stats_grid.mx-sm-3.mt-3 > div:nth-child(3) > div:nth-child(2) > div.game_stat_data').text()
        data['dislikes'] = parsed('#page_content_body > div.game_stats_grid.mx-sm-3.mt-3 > div:nth-child(4) > div:nth-child(2) > div.game_stat_data').text()
        data['description'] = parsed("#page_content_body > div:nth-child(7) > div > div > pre").text()
        data['like_percentage'] = parsed('#page_content_body > div.game_stats_grid.mx-sm-3.mt-3 > div:nth-child(5) > div:nth-child(2) > div.game_stat_data').text()
        data['favorites'] = parsed('#page_content_body > div.game_stats_grid.mx-sm-3.mt-3 > div:nth-child(6) > div:nth-child(2) > div.game_stat_data').text()
        data['average_playtime'] = parsed('#page_content_body > div.game_stats_grid.mx-sm-3.mt-3 > div:nth-child(7) > div:nth-child(2) > div.game_stat_data').text()
        data['last_updated'] = parsed('#page_content_body > div.game_stats_grid.mx-sm-3.mt-3 > div:nth-child(8) > div:nth-child(2) > div.game_stat_data').text()
        return data
    } catch (err) {
        console.log(err)
    }
}

module.exports = { 
    getInfo
}

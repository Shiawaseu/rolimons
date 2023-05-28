const req = require("./request.js")
const cheerio = require('cheerio')

const endpoint = "https://rolimons.com/itemapi/itemdetails"
const uuidurl = "https://www.rolimons.com/uaid/"
var Cached = {
    Status: false,
    Data: undefined
}; // Cache to avoid stressing the server

async function getItems() {
    // Items is the whole response, we only need the JSON Body
    if (Cached['Status'] == false) {
        let items = await req.request(endpoint)
        Cached['Status'] = true
        Cached['Data'] = items
        return items['data']
    }
    if (Cached['Status'] == true) {
        let items = Cached['Data']
        return items['data']
    }
}
const dict = [
    demand = {
        "-1": "Unassigned",
        "4": "Amazing",
        "3": "High",
        "2": "Normal",
        "1": "Low",
        "0": "Terrible"
    },
    trend = {
        "-1": "Unassigned",
        "3": "Raising",
        "2": "Stable",
        "1": "Unstable",
        "0": "Lowering"
    },
    booleans = {
        "1": true,
        "-1": false
    }
]


function clear_cache() {
    // Function to clear cache in order to re-request the API
    Cached['Status'] = false
    Cached['Data'] = undefined
}

function find(itemdata, filter) {
    const keys = Object.keys(itemdata[0].items);
    let found;
    for (let i = 0; i < keys.length; i++) {
        const valueInIteration = itemdata[0].items[keys[i]];
        if (valueInIteration[1] === filter) {
            found = valueInIteration
            break;
        }
    }
    return found;
}


async function searchItem(mode, info) {
    if (mode == 'name') {
        var newi = info
        if (newi.length <= 6) {
            newi = newi.toUpperCase() // For Acryonyms
        } else {
            newi = info
        }
        await getItems().then( // Get all items to filter
            async function(data) {
                let parsed = [data]
                let found = find(parsed, newi)
                // Basic (Names & Values)
                found.name = found[0]
                found.acronym = found[1]
                found.rap = found[2]
                found.value = found[3]
                found.default_value = found[4]
                // Filtered by dictionary above
                found.demand = dict[0][found[5]]
                found.trend = dict[1][found[6]]
                found.projected = dict[2][found[7]]
                found.hyped = dict[2][found[8]]
                found.rare = dict[2][found[9]]
                result = found
            }
        )
        return result
    }
    if (mode == 'id') {
        await getItems().then(
            async function(data) {
                const found = data['items'][info]
                found.name = found[0]
                found.acronym = found[1]
                found.rap = found[2]
                found.value = found[3]
                found.default_value = found[4]
                // Filtered by dictionary above
                found.demand = dict[0][found[5]]
                found.trend = dict[1][found[6]]
                found.projected = dict[2][found[7]]
                found.hyped = dict[2][found[8]]
                found.rare = dict[2][found[9]]
                result = found
            }
        )
        return result
    }
}

async function getUUID(uuid, users) {
    let data = []
    data['history'] = []
    const response = await req.request(uuidurl + uuid)
    const parsed = cheerio.load(response['data'])
    let count = 1
    data['item_name'] = parsed('#page_content_body > div.container-fluid.mt-2.px-0 > div > div.col-12.col-sm-6.col-md-7.col-lg-8.col-xl-9.bg-primary.px-0.pb-3.pb-sm-0 > div.d-flex.justify-content-around > div:nth-child(1) > div.d-flex.mt-0.mt-md-4 > div.mx-2.mt-2.pt-0.pt-md-1.text-truncate > h5').text()
    data['last_owner'] = parsed('#page_content_body > div.container-fluid.mt-2.px-0 > div > div.col-12.col-sm-6.col-md-7.col-lg-8.col-xl-9.bg-primary.px-0.pb-3.pb-sm-0 > div.d-flex.justify-content-around > div:nth-child(1) > div:nth-child(2) > div.mx-2.mt-2.pt-1 > h5').text()
    data['serial'] = parsed('#page_content_body > div.container-fluid.mt-2.px-0 > div > div.col-12.col-sm-6.col-md-7.col-lg-8.col-xl-9.bg-primary.px-0.pb-3.pb-sm-0 > div.d-flex.justify-content-around > div.mt-0.mt-sm-1.stat_pane_stat_column.d-block.d-sm-none.d-md-block > div.d-flex.mt-0.mt-sm-4 > div.mx-2.mt-2.pt-0.pt-md-1 > h5').text()
    data['owned_since'] = parsed('#page_content_body > div.container-fluid.mt-2.px-0 > div > div.col-12.col-sm-6.col-md-7.col-lg-8.col-xl-9.bg-primary.px-0.pb-3.pb-sm-0 > div.d-flex.justify-content-around > div:nth-child(1) > div:nth-child(3) > div.mx-2.mt-2.pt-1 > h5').text()
    data['created'] = parsed('#page_content_body > div.container-fluid.mt-2.px-0 > div > div.col-12.col-sm-6.col-md-7.col-lg-8.col-xl-9.bg-primary.px-0.pb-3.pb-sm-0 > div.d-flex.justify-content-around > div.mt-0.mt-sm-1.stat_pane_stat_column.d-block.d-sm-none.d-md-block > div:nth-child(2) > div.mx-2.mt-2.pt-1 > h5').text()
    data['uuid_discovered'] = parsed("#page_content_body > div.container-fluid.mt-2.px-0 > div > div.col-12.col-sm-6.col-md-7.col-lg-8.col-xl-9.bg-primary.px-0.pb-3.pb-sm-0 > div.d-flex.justify-content-around > div.mt-0.mt-sm-1.stat_pane_stat_column.d-block.d-sm-none.d-md-block > div:nth-child(3) > div.mx-2.mt-2.pt-1 > h5").text()
    parsed('#page_content_body > div.mx-0.mx-sm-3').each((i, e) => {
        for (let x = 0; x < users; x++) {
            var id
            var name
            var plr = parsed(e).find(`div:nth-child(${count}) > div > div:nth-child(1) > div.mt-2.mb-1.text-center.text-truncate > a`)
            try {
                name = plr.text();
                id = parseInt(plr.attr('href').replace('/player/', ''))
            } catch (e) {
                name = "Hidden/Deleted";
                id = undefined
            } // amazing one-line
            var updated_since = parsed(e).find(`div:nth-child(${count}) > div > div.mt-4.pt-2 > h5`).text()
            var updated_date = parsed(e).find(`div:nth-child(${count}) > div > div.mt-4.pt-2 > p.mb-0.text-center.small.text-muted`).text()
            data['history'].push({
                id,
                name,
                updated_since,
                updated_date
            })
            count = count + 1
        }
    })
    return data
}



module.exports = { // Export functions
    getItems,
    clear_cache,
    searchItem,
    getUUID
}

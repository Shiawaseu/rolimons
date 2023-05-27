const axios = require('axios');

async function handler(...args) {
    let config = {
        headers: args[1] // headers (if exists)
    }
    await axios.get(args[0], config) // request the endpoint
        .then(async function(res) {
            response = res
        })
        .catch(function(error) {
            console.log(error)
            response = "ERROR"
        })
    return response
}

async function request(...args) {
    var request = await handler(...args)
    return request
}

module.exports = { // Export functions
    request
}

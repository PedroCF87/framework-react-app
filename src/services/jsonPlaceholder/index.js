const axios = require('axios')

exports.apiJsonPlaceholder = axios.create({
    baseURL: process.env.API_URL
})

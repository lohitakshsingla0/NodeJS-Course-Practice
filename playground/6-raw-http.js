

const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=35faed123630964d4aa554e07d00e4d5&query=40,-75&units=m'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        
    })

    response.on('end', () =>{
        const body = JSON.parse(data)
        console.log(body)
    })

    
})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()
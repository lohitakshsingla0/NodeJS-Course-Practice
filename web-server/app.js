const express = require('express')
const path = require('path')


const app = express()

const publicDirectoryPath = path.join(__dirname, '/public')
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.send('<html>About</html>')
})


app.get("/help", (req, res) => {
    res.send("in the help")
})

app.get("/about", (req, res) => {
    res.send('<html>About</html>')
})

app.get("/WeatherForecast", (req, res) => {
    res.send({
        
    })
})

app.listen(3000, () => {
    console.log("Server is up on server 3000")
})
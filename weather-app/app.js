//const request = require('postman-request')
const geocode = require("./utils/geocode")
const checkWeather = require("./utils/checkWeather")

const address = process.argv[2]

if(!address){
    console.log("Please provide a location name to check the weather!")
}
else{
    console.log(process.argv)


    geocode(address, (error, {latitude, longitude, place} ) => {
        if(error){
            return console.log(error)
        }
        checkWeather(latitude, longitude, (error, forcastWeatherData) =>
        {
            if(error){
                return console.log(error)
            }
            
            console.log(place)
            console.log(forcastWeatherData)
        })
    
        
    })
    
}

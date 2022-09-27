const request = require('postman-request')

const listMeals = (callback) => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    request({url, json: true}, (error, {body}) =>{ 
        if(error){
            callback("Unable to connect to network", undefined)
        }else if(body.error){
            callback("Search not found", undefined)
        }
        else{
            callback(undefined, body.categories[0])
            }
    })
}


module.exports = listMeals
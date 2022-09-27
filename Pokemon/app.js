//const request = require('postman-request')

const listMeals = require('./utils/listMeals')

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

listMeals((error, data) => {
    if(error){
        return console.log(error)
    }else{
        console.log(typeof(data))
    }
})
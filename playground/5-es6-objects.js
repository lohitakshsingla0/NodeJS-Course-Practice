// Object Property Shorthand

const name = "Andrew"
const userAge = 27

const user = {
    name,
    age : userAge,
    location : "Nabha"
}

console.log(user)


//Object Destructuring

const product = {
    label: "Red Pen", 
    Price: 3,
    stock : 220,
    salesPrice : undefined,
    rating : 4
}


// const {label:productLabel, stock, rating= 5} = product
// console.log(productLabel, stock, rating)

const transaction = (type, {label, stock}) => {
    console.log(label, stock)
}

transaction('order', product)
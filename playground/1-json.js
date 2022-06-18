const fs = require('fs');

// const book ={
//     title : 'Ego in the Enemy',
//     author : 'Ryan Holiday',
//     dateOfRelease : '12/05/1998'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-JSON.json', bookJSON)
// console.log(book);
// console.log(bookJSON);  //converts onject into string

// const parseData  = JSON.parse(bookJSON);  //converts data into object

// console.log(parseData.author);


// const dataBuffer = fs.readFileSync('1-JSON.json');
// const JSONData = dataBuffer.toString();
// const data = JSON.parse(JSONData);
// console.log(data.title);

const recoveredDataInBuffer = fs.readFileSync('1-JSON.json');
console.log(recoveredDataInBuffer);

const recoveredDataInString = recoveredDataInBuffer.toString();
console.log(recoveredDataInString);

const recoveredData = JSON.parse(recoveredDataInString);
console.log(recoveredData);

recoveredData.name = 'Lohit';
recoveredData.age = 24;

const sentBackData = JSON.stringify(recoveredData);
fs.writeFileSync('1-JSON.json', sentBackData);
console.log(recoveredData);
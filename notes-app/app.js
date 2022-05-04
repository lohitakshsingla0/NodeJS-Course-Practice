// const fs = require ('fs');

// fs.writeFileSync('notes.txt', 'This file was created by Node.js.');
// //writeFileSync write the data to a file.
// //if the file doesnot exists, it will create and write the data.

// fs.appendFileSync('notes.txt',' This was edited by Lohitaksh');
// //appends data to existing file.

const add= require('./utils.js');
//const name= require('./utils.js');
//const name = "Lohitaksh";

const sum = add(4, 10);

console.log(sum);
//console.log(name); 
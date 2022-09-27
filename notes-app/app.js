// const fs = require ('fs');

// fs.writeFileSync('notes.txt', 'This file was created by Node.js.');
// //writeFileSync write the data to a file.
// //if the file doesnot exists, it will create and write the data.

// fs.appendFileSync('notes.txt',' This was edited by Lohitaksh');
// //appends data to existing file.

const chalk = require('chalk');
const validator = require('validator');
const { argv } = require('yargs');
const yargs = require('yargs');
//const { default: isEmail } = require('validator/lib/isemail');
const notes = require('./notes.js')


const add= require('./utils.js');
//const { argv, require } = require('yargs');
//const name= require('./utils.js');
//const name = "Lohitaksh";

//const sum = add(4, 10);
//onsole.log(sum);
//console.log(name); 



// console.log(validator.isEmail("lohitakshsingla0.com"));
// console.log(validator.isURL("lohitakshsingla0@gmail.com"));
// console.log(chalk.green.bold.inverse('Success!'));

//console.log(process.argv);


//const command = process.argv[2];

// if (command === 'add'){                                  //node app.js add
//     console.log('Adding note!');                          //add was added through command line to make the action
// }else if(command === 'remove'){
//     console.log('Removing Note!');
// }

//adding the notes
yargs.command({
    command: 'add',
    describe : 'Add a new note',
    builder : {
        title:{
            describe: 'No Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'No body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title ,argv.body)
       
    }
})

//removing the notes
yargs.command({
    command : 'remove',
    describe: 'removing a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        notes.removeNote(argv.title)
    }
})

//listing the notes
yargs.command({
    command : 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }
})


//reading the notes
yargs.command({
    command : 'read',
    describe: 'read your notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse();
//console.log(yargs.argv);
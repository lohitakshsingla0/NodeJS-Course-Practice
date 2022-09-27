const { Console } = require('console')
const fs  = require('fs')
const chalk = require('chalk');

const getNotes = () => {
    return 'Your Notes'
}

const addNote= (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title===title)
    const duplicateNote = notes.find((note) => note.title===title)
    //console.log(duplicateNote)

    debugger
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New Notes added!")
    } else {
        console.log("Note title taken!")
    }
    
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title ===title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.bode)
    }
    else{
        console.log(chalk.red.inverse("Note not found"))
    }   
}


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =  () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    }
    

}


const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) =>  note.title !== title)
    

    if (notesToKeep.length === notes.length){
        console.log(chalk.red.bold.inverse("No Notes removed!"))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.bold.inverse("Notes removed!"))
    }
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.inverse("Your Notes"))

    notes.forEach((note) => {
        console.log(note.title)
    });
}


//module.exports = getNotes;

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
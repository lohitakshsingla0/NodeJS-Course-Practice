const { Console } = require('console')
const fs  = require('fs')
const chalk = require('chalk');

const getNotes = function(){
    return 'Your Notes'
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title===title

    })

    if (duplicateNotes.length ===0){
        notes.push({
            title: title,
            bode: body
        })
        saveNotes(notes)
        console.log("New Notes added!")
    } else {
        console.log("Note title taken!")
    }

    
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function (){
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
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    

    if (notesToKeep.length === notes.length){
        console.log(chalk.red.bold.inverse("No Notes removed!"))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.bold.inverse("Notes removed!"))
    }
}



//module.exports = getNotes;

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
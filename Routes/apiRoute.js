const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
const newNote = require('./Develop/db/db.json');
const { doesNotThrow } = require('assert');

app.get('/api/notes', (req, res) => res.json(newNote));

app.post('./api/notes', (req,res) => res.json(newNote));


module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFileSync('./Develop/db/db/json', (err, data) => {
            if(err) throw err;
            return res.json(JSON.parse(data))
        })
        
});
    app.post('/api/notes', (req, res) => {
        const postNote = req.body;
        fs.readFile('./Develop/db/db.json', (err, data) => {
            if(err) throw err;
            const note = JSON.parse(data)
            postNote.id = uuid.v4()
            note.push(postNote);
            stringNote = JSON.stringify(note);
            fs.writeFile('./Develop/db/db.json', stringNote, (err, data) => {
                return res.json(postNote)
            })

        })

    })


};


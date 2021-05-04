const fs = require('fs');
const uuid = require('uuid');
// const { doesNotThrow } = require('assert');



module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFileSync('./db/db.json', (err, data) => {
            if(err) throw err;
            return res.json(JSON.parse(data))
        })
        
});
    app.post('/api/notes', (req, res) => {
        const postNote = req.body;
        fs.readFile('./db/db.json', (err, data) => {
            if(err) throw err;
            const note = JSON.parse(data)
            postNote.id = uuid.v4()
            note.push(postNote);
            stringNote = JSON.stringify(note);
            fs.writeFile('./db/db.json', stringNote, (err, data) => {
                return res.json(postNote)
            })

        })

    })


};


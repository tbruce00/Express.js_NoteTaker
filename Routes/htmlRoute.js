const path = require('path');


module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, 'Express.js_NoteTaker/public/notes.html'));
    });
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'Express.js_NoteTaker/public/index.html'));
    });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'Express.js_NoteTaker/public/index.html'));
    })
};


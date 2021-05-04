const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require('./Routes/apiRoute')(app);
require('./Routes/htmlRoute')(app);

app.listen(PORT, () => console.log(`App listening on Port ${PORT}`))


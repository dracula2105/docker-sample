const express = require('express')
const app = express()

const PORT = 3000;
const HOST = 'localhost';
app.get('/', function(req, res) {
    res.send('Hello World')
})
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
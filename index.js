const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<html><h1>Hi there from cbk demo! Feature 8!</h1></html>')
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors);

server.get('/form', (req, res) => {
    console.log('he recibido peticion desde web...');
    res.send('hola');
});

server.listen(8080, () => {
    console.log(`Server listening at http://localhost:8080`);
});

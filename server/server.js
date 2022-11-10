const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors);

server.get('/form', (req, res) => {
    console.log('he recibido peticion desde web...');
    /*     {data} = req.body */
    res.send('hola');
});

server.listen(8000, () => {
    console.log(`Server listening at http://localhost:8000`);
});

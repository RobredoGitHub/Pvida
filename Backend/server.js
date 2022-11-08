require('dotenv').config();
const express = require('express');
const server = express();
const { PORT } = process.env;

//Errors

server.use((error, req, res, next) => {
    console.log(error.message);
    res.status(error.httpStatus || 500);
    res.send({
        status: 'error',
        message: error.message,
    });
});
server.use((req, res) => {
    res.status(404);
    res.send({
        status: 'error',
        message: 'Ruta no encontrada',
    });
});

server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

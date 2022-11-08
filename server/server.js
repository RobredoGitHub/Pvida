const express = require('express');
const server = express();

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

server.listen(3000, () => {
    console.log(`Server listening at http://localhost:3000`);
});

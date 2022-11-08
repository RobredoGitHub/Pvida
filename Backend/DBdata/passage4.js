const getDB = require('../getDB');

async function passage4() {
    let connection;
    try {
        connection = await getDB();
        const [data] = await connection.query(`
        SELECT minimo, maximo FROM vivienda WHERE id = 14  `);
        let minimo = data[0].minimo;
        let maximo = data[0].maximo;

        console.log(minimo);
        console.log(maximo);
    } catch (error) {
        console.error(error.message);
    } finally {
        if (connection) connection.release();
        process.exit(0);
    }
}

passage4();

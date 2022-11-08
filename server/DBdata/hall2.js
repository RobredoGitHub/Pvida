const getDB = require('../getDB');

async function hall2() {
    let connection;
    try {
        connection = await getDB();
        const [data] = await connection.query(`
        SELECT maximo FROM vivienda WHERE id = 7  `);
        let maximo = data[0].maximo;

        console.log(maximo);
    } catch (error) {
        console.error(error.message);
    } finally {
        if (connection) connection.release();
        process.exit(0);
    }
}

hall2();

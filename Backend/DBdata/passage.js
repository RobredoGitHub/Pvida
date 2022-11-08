const getDB = require('../getDB');

async function passage() {
    let connection;
    try {
        connection = await getDB();
        const [data] = await connection.query(`
        SELECT minimo FROM vivienda WHERE id = 11  `);
        let minimo = data[0].minimo;

        console.log(minimo);
    } catch (error) {
        console.error(error.message);
    } finally {
        if (connection) connection.release();
        process.exit(0);
    }
}

passage();

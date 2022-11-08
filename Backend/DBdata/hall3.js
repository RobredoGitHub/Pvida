const getDB = require('../getDB');

async function hall3() {
    let connection;
    try {
        connection = await getDB();
        const [data] = await connection.query(`
        SELECT minimo FROM vivienda WHERE id = 8  `);
        let minimo = data[0].minimo;
        minimo = data[0].minimo;

        console.log(minimo);
    } catch (error) {
        console.error(error.message);
    } finally {
        if (connection) connection.release();
        process.exit(0);
    }
}

hall3();

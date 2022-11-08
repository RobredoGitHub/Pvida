const getDB = require('../getDB');

async function floor2() {
    let connection;
    try {
        connection = await getDB();
        const [data] = await connection.query(`
        SELECT clase FROM vivienda WHERE id = 2  `);
        let clase = data[0].clase;

        console.log(clase);
    } catch (error) {
        console.error(error.message);
    } finally {
        if (connection) connection.release();
        process.exit(0);
    }
}

floor2();

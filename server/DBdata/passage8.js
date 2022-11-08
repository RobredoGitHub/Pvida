const getDB = require('../getDB');

async function passage8() {
    let connection;
    try {
        connection = await getDB();
        const [data] = await connection.query(`
        SELECT exacto FROM vivienda WHERE id = 18  `);
        let exacto = data[0].exacto;

        console.log(exacto);
    } catch (error) {
        console.error(error.message);
    } finally {
        if (connection) connection.release();
        process.exit(0);
    }
}

passage8();

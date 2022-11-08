const getDB = require('../getDB');

async function passage3() {
    let connection;
    try {
        connection = await getDB();
        const [data] = await connection.query(`
        SELECT texto FROM vivienda WHERE id = 13  `);
        let texto = data[0].texto;

        console.log(texto);
    } catch (error) {
        console.error(error.message);
    } finally {
        if (connection) connection.release();
        process.exit(0);
    }
}

passage3();

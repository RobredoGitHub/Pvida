// const getDB = require('../getDB');

// async function testing() {
//     let connection;
//     try {
//         connection = await getDB();
//         const [data] = await connection.query(`
//         SELECT minimo FROM vivienda WHERE id = 17  `);

//         console.log(data[0].minimo);
//     } catch (error) {
//         console.error(error.message);
//     } finally {
//         if (connection) connection.release();
//         process.exit(0);
//     }
// }

// testing();

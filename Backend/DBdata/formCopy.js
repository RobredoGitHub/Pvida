const getDB = require('../getDB');
console.log('hola');
const form = async () => {
    let connection;

    try {
        connection = await getDB();
        /*  const {
            floor,
            floor2,
            floor3,
            lobby,
            lobby2,
            hall,
            hall2,
            hall3,
            hall4,
            hall5,
            passage,
            passage2,
            passage3,
            passage4,
            passage5,
            passage6,
            passage8,
            passage9,
            passage10,
            windowHall,
        } = req.body; */
        /*       if (! || !) {
        const error = new Error('Missing email or password');
        error.httpStatus = 404;
        throw error;
      } */
        const [formData] = await connection.query(
            `
            SELECT clase FROM vivienda WHERE id = 1
            SELECT clase FROM vivienda WHERE id = 2
            SELECT clase FROM vivienda WHERE id = 3
            SELECT clase FROM vivienda WHERE id = 4
            SELECT clase FROM vivienda WHERE id = 5
            SELECT clase FROM vivienda WHERE id = 6
            SELECT clase FROM vivienda WHERE id = 7
            SELECT clase FROM vivienda WHERE id = 8
            SELECT clase FROM vivienda WHERE id = 9
            SELECT clase FROM vivienda WHERE id = 10
            SELECT clase FROM vivienda WHERE id = 11
            SELECT clase FROM vivienda WHERE id = 12
            SELECT clase FROM vivienda WHERE id = 13
            SELECT clase FROM vivienda WHERE id = 14
            SELECT clase FROM vivienda WHERE id = 15
            SELECT clase FROM vivienda WHERE id = 16
            SELECT clase FROM vivienda WHERE id = 18
            SELECT clase FROM vivienda WHERE id = 19
            SELECT clase FROM vivienda WHERE id = 20
            SELECT clase FROM vivienda WHERE id = 22
      `,
            [
                floor,
                floor2,
                floor3,
                lobby,
                lobby2,
                hall,
                hall2,
                hall3,
                hall4,
                hall5,
                passage,
                passage2,
                passage3,
                passage4,
                passage5,
                passage6,
                passage8,
                passage9,
                passage10,
                windowHall,
            ]
        );
        console.log([formData]);

        /*         res.send({
            status: 'ok',
            message: 'submited!',
        }); */
    } catch (error) {
        console.error(Error);
    } finally {
        if (connection) connection.release();
    }
};
form();
module.exports = form;

async function exibirProduto(id) {
    const connection = require('./db');

    if (id === undefined) {
        const [result] = await connection.query(
            'SELECT * FROM lista'
        );

        return result
    } else {
        const [result] = await connection.query(
            'SELECT * FROM lista where id = ?',
            [id]
        );

        return result
    }
}

module.exports = exibirProduto;
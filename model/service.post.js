async function inserirProduto(nome, marca, preco) {

    const connection = require('./db');

    const [result] = await connection.query(
        'INSERT INTO lista (nome, marca, preco) VALUES (?, ?, ?)',
        [nome, marca, preco]
    );

    return result;
}

module.exports = inserirProduto;
const atualizarProduto = async (id, nome, marca, preco) => {
    const connection = require('./db');

    const [result] = await connection.query(
        'UPDATE lista SET nome = ?, marca = ?, preco = ? WHERE id = ?',
        [nome, marca, preco, id]
    );

    return result;
};

module.exports = atualizarProduto;
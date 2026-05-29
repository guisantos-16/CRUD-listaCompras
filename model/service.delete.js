async function deletarProduto(id){
    const connect = require('./db');

    const [result] = await connect.query(
        'DELETE FROM lista WHERE id = ?',
        [id]
    );

    console.log(result);

    return result;
}

module.exports = deletarProduto;
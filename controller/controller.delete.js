const deletarProduto = require("../model/service.delete");

async function apagarItem(req, res) {
    try {
        const { id } = req.params;
        const resultado = await deletarProduto(id);

        return res.json({
            message: `Produto ${id} da tabela deletado!`,
            resultado
        });
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            message: 'Erro ao deletar produto...',
            error
        });
    }
}

module.exports = { apagarItem };
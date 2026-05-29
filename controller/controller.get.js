async function mostrarProduto(req, res){
    const exibirProduto = require('../model/service.get');

    try {
        const { id } = req.params;

        const resultado = await exibirProduto(id);

        res.status(200).json({
            message: 'Produtos cadastrados na lista.',
            resultado
        });
    } catch(error) {
        res.status(500).json({
            message: 'Erro na consulta...'
        });

        console.error(error);
    }
}

module.exports = {
    mostrarProduto
};
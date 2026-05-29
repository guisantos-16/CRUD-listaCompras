const inserirProduto = require('../model/service.post');

function validarProduto(nome, marca, preco) {
    if (!nome || !marca || preco == null) {
        return 'Todos os campos são obrigatórios';
    }

    if (typeof nome !== 'string' || typeof marca !== 'string') {
        return 'Nome e marca devem ser texto';
    }

    if (typeof preco !== 'number') {
        return 'Preço deve ser número';
    }

    if (!nome.trim() || !marca.trim()) {
        return 'Texto inválido';
    }

    if (preco <= 0) {
        return 'Preço inválido';
    }

    return null;
}

async function criarProduto(req, res) {

    try {
        const { nome, marca, preco } = req.body;

        const erro = validarProduto(nome, marca, preco);

        if (erro) {
            return res.status(400).json({
                message: erro
            });
        }
        
        const resultado = await inserirProduto(
            nome.trim(),
            marca.trim(),
            preco
        );

        return res.status(201).json({
            message: 'Produto inserido com sucesso.',
            data: {
                id: resultado.insertId
            }
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: 'Erro interno no servidor'
        });
    }
}

module.exports = {
    criarProduto
};
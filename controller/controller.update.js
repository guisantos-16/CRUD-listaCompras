const atualizarProduto = require('../model/service.update');

async function redefinir(req, res) {
    try {
        const { id } = req.params;
        const { nome, marca, preco } = req.body;

        const idNum = Number(id);
        const precoNum = Number(preco);

        if (!id || isNaN(idNum)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        function validarProduto(nome, marca, preco) {
            if (!nome?.trim() || !marca?.trim() || preco == null) {
                return 'Todos os campos são obrigatórios';
            }

            if (typeof nome !== 'string' || typeof marca !== 'string') {
                return 'Nome e marca devem ser texto';
            }

            if (isNaN(preco)) {
                return 'Preço deve ser número';
            }

            if (preco <= 0) {
                return 'Preço inválido';
            }

            return null;
        }

        const erro = validarProduto(nome, marca, precoNum);

        if (erro) {
            return res.status(400).json({ message: erro });
        }

        const result = await atualizarProduto(
            idNum,
            nome.trim(),
            marca.trim(),
            precoNum
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Produto não encontrado'
            });
        }

        return res.status(200).json({
            message: 'Produto atualizado!'
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Erro interno'
        });
    }
}

module.exports = redefinir;
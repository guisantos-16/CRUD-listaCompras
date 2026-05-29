function authMiddleware(req, res, next) {
    const apiChave = req.headers['x-api-key']; 

    const chaveSecreta = process.env.TOKEN; 

    if (!apiChave || apiChave !== chaveSecreta) { 
        return res.status(401).json({
            message: 'Não autorizado'
        });
    }

    next();
}

module.exports = authMiddleware;
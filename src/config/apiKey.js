require ('dotenv')

const apiKeyMiddleware = (req, res, next) => {
    const clientkey = req.headers['x-api-key'];
    const serverKey = process.env.API_KEY;

    if(!clientkey) {
        return res.status(401).json ({error: 'Chave de API não fornecida!'});
    }
    if(clientkey !== serverKey) {
        return res.status(403).json({error: 'Chave da API incorreta! Sem autorização.'})
    }
    next(); //Passou, pode continuar!
    
};


module.exports = apiKeyMiddleware;
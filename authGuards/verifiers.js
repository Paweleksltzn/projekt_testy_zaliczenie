const gameData = require('../data/gameData');

exports.sessionVerifier = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    const idSesji = req.query.idSesji;
    if (gameData.some(gameObj => gameObj.idSesji === idSesji)) {
        req.gameObj = gameObj;
        return next();
    } else {
        return res.status(504).send('Brak autoryzacji, podany identyfikator sesji nie jest zarejestrowany');
    }
}
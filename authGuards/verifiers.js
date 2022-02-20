const gameData = require('../data/gameData');

exports.sessionVerifier = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    const idSesji = req.query.idSesji;
    if (gameData.currentGames.some((gameObj, index) => {
        if (gameObj.idSesji = idSesji) {
            req.query.gameObj = gameObj;
            req.query.index = index;
            return true;
        }
        return false;
    })) {
        return next();
    } else {
        return res.status(504).send('Brak autoryzacji, podany identyfikator sesji nie jest zarejestrowany');
    }
}
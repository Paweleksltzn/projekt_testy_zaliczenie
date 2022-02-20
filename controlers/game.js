const Game = require('../models/Game').Game;
const gameData = require('../data/gameData');
const scoresEnum = require('../enums/scoresEnum').scoresEnum;
const utils = require('../utils/utils');

exports.start = async function(req, res, next) {
    try {
        const game = new Game();
        gameData.currentGames.push(game);
        return res.json({
            info: 'Gra została rozpoczęta poprawnie',
            idSesji: game.idSesji
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send('Wystąpił błąd podczas uruchamiania gry');
    }
}

exports.guess = async function(req, res, next) {
    try {
        if (!req.query.liczba) {
            return res.status(400).send('Nieprawidłowe żądanie');
        }

        const {gameObj, liczba, index} = req.query;
        let wynik;
        gameObj.liczbaProb++;
        if (gameObj.liczba > liczba) {
            wynik = scoresEnum.TOO_SMALL;
        } else if (gameObj.liczba < liczba) {
            wynik = scoresEnum.TOO_BIG;
        } else {
            wynik = scoresEnum.WINNER;
            gameData.currentGames.splice(index, 1);
            gameData.scores.push({
                liczbaProb: gameObj.liczbaProb,
                idSesji: gameObj.idSesji,
                calkowityCzasGry: utils.getTimePresentation(Date.now() - gameObj.czasRozpoczeciaGry)
            });
        } 
        return res.json({
            idSesji: gameObj.idSesji,
            liczbaProb: gameObj.liczbaProb,
            wynik
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send('Wystąpił błąd podczas podejmowania ruchu');
    }
}

exports.hiscores = async function(req, res, next) {
    try {
        const hiscores =  gameData.scores.slice(0, 10).sort((game1, game2) => {
            if (game1.liczbaProb < game2.liczbaProb) {
                return -1;
            } else if (game1.liczbaProb > game2.liczbaProb) {
                return 1;
            }
            return 0;
        });
        return res.json(hiscores);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Wystąpił błąd podczas odczytywania najlepszych wynikow');
    }
}
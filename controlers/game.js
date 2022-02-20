exports.start = async function(req, res, next) {
    try {
        return res.json({});
    } catch (err) {
        console.log(err);
        return res.status(500).send('Wystąpił błąd podczas uruchamiania gry');
    }
}

exports.guess = async function(req, res, next) {
    try {
        return res.json({});
    } catch (err) {
        console.log(err);
        return res.status(500).send('Wystąpił błąd podczas podejmowania ruchu');
    }
}

exports.hiscores = async function(req, res, next) {
    try {
        return res.json({});
    } catch (err) {
        console.log(err);
        return res.status(500).send('Wystąpił błąd podczas odczytywania najlepszych wynikow');
    }
}
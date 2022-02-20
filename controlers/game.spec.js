const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)
const gameData = require('../data/gameData');
const testingData = require('../testing/testing-data');
const scoresEnum = require('../enums/scoresEnum').scoresEnum;

// given when then
describe('ENDPOINT TESTS', () => {
    describe('start', () => {
        it('gets the start endpoint', async done => {
            const response = await request.get('/api/start')
          
            expect(response.status).toEqual(200)
            expect(response.body.info).toEqual('Gra została rozpoczęta poprawnie')
            expect(response.body.idSesji).toBeTruthy()
            done()
        })
    });

    describe('guess', () => {
        beforeEach(() => {
            gameData.currentGames = [...testingData.testingCurrentGames];
            gameData.scores = [...testingData.testingScores];
        });

        it('gets the guess and returns status 200 and winner result', async done => {
            const response = await request.get('/api/guess?idSesji=1645354493964&liczba=17')
          
            expect(response.status).toEqual(200)
            expect(response.body.wynik).toEqual(scoresEnum.WINNER)
            expect(response.body.liczbaProb).toEqual(16)
            expect(response.body.idSesji).toEqual(1645354493964)
            done()
        })

        it('gets the guess and returns status 200 and too small result', async done => {
            const response = await request.get('/api/guess?idSesji=1645354493964&liczba=2')
          
            expect(response.status).toEqual(200)
            expect(response.body.wynik).toEqual(scoresEnum.TOO_SMALL)
            expect(response.body.liczbaProb).toEqual(17)
            expect(response.body.idSesji).toEqual(1645354493964)
            done()
        })

        it('gets the guess and returns status 200 and too big result', async done => {
            const response = await request.get('/api/guess?idSesji=1645354493964&liczba=99')
          
            expect(response.status).toEqual(200)
            expect(response.body.wynik).toEqual(scoresEnum.TOO_BIG)
            expect(response.body.liczbaProb).toEqual(18)
            expect(response.body.idSesji).toEqual(1645354493964)
            done()
        })

        it('gets the guess and returns status 400 for missing number', async done => {
            const response = await request.get('/api/guess?idSesji=1645354493964')
          
            expect(response.status).toEqual(400)
            done()
        })

        it('gets the guess and returns status 504 unauthorized for not existing session id', async done => {
            const response = await request.get('/api/guess?idSesji=1111121312312&liczba=23')
          
            expect(response.status).toEqual(504)
            done()
        })
    });

    describe('hiscores', () => {
        it('gets the hiscores endpoint', async done => {
            const response = await request.get('/api/hiscores')
          
            expect(response.status).toEqual(200)
            expect(response.body.length).toEqual(10)
            expect(response.body[0].liczbaProb).toEqual(1);
            done()
        })
    });
});

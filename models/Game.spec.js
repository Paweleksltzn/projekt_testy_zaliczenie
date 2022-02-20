const Game = require('./Game').Game;

// given when then
describe('Game', () => {
    test('Should create game object with preinitialized values', () => {
        const game = new Game();
        
        expect(game.czasRozpoczeciaGry).toBeTruthy();
        expect(game.idSesji).toBeTruthy();
        expect(game.czasRozpoczeciaGry).toBeTruthy();
        expect(game.liczbaProb).toEqual(0);
      });
});
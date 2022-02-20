const utils = require('./utils');

describe("getTimePresentation", () => {
    test.each([
        [10000, '00:10'],
        [5000, '00:05'],
        [113000, '01:53'],
        [713000, '11:53']
      ])('Should create presentation of time for miliseconds', (miliseconds, expected) => {
        expect(utils.getTimePresentation(miliseconds)).toBe(expected);
      });
});
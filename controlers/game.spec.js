const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)

// given when then
describe('ENDPOINT TESTS', () => {
    describe('start', () => {
        it('gets the start endpoint', async done => {
            const response = await request.get('/api/start')
          
            expect(response.status).toBe(200)
            expect(response.body.info).toBe('Gra została rozpoczęta poprawnie')
            expect(response.body.idSesji).toBeTruthy()
            done()
        })
    });
});

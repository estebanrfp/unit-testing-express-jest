import request from 'supertest';
import app from '../app';
import '@babel/polyfill'

// describe('Probar nuestro mini servidor express', () => {
//     test('Debe responder al metodo GET', done  => {
//         request(app).get('/').then((response) => {
//             expect(response.statusCode).toBe(200)
//             done();
//         });
//     });
// });

describe('Probar nuestro mini servidor express', () => {
    test('Debe responder al metodo GET', async () => {
        await request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200)
        });
    });
});

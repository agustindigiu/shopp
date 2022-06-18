const fetch = require('node-fetch');

const server = require('../../src/index.js');

const fixture = require('../../fixtures/index.js');

let instance;


beforeEach(async () => {
    await fixture.insertIntoDB();
    instance = await server.start();

});

afterEach(async () => {
    await instance.close();
});

test('Deberia retornar 200 ok cuando se hace un request a la home', async () => {
    const port = instance.address().port;
    const resp = await fetch(`http://localhost:${port}/`);
    expect(resp.status).toBe(200);
    
});

test('Deberia retornar 200 ok cuando se hace un request al carrito', async () => {
    const port = instance.address().port;
    const resp = await fetch(`http://localhost:${port}/cart`);
    expect(resp.status).toBe(200);
    
});

test('Deberia retornar 200 ok cuando se hace un request al descuento', async () => {
    const port = instance.address().port;
    const resp = await fetch(`http://localhost:${port}/discount`);
    expect(resp.status).toBe(200);
    
});




// test/test.js
const assert = require('assert');
const saludar = require('../app');

describe('Pruebas de la función saludar', () => {
    it('Debería retornar el saludo correcto para Juan', () => {
        assert.strictEqual(saludar('Juan'), 'Hola, Juan!');
    });

    it('Debería retornar el saludo correcto para Maria', () => {
        assert.strictEqual(saludar('Maria'), 'Hola, Maria!');
    });
});

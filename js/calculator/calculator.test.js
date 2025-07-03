// Importamos el modulo calculator que contiene las funciones matematicas
const calculator = require('./calculator');

// Prueba: suma 1 + 2 debe dar 3
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

// Prueba: suma -4 + 8 debe dar 4
test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

// Prueba: resta 5 - 4 debe dar 1
test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

// Prueba: resta -5 - (-10) debe dar 5
test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// Prueba: divide 10 entre 2 debe dar 5
test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

// Prueba: divide 9 entre 3 debe dar 3
test('divide 9 / 3 to equal 3', () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

// Prueba: dividir entre 0 debe regresar "Error"
test('divide by 0 should return "Error"', () => {
  expect(calculator.divide(10, 0)).toBe("Error");
});

// Prueba: multiplica 4 * 5 debe dar 20
test('multiply 4 * 5 to equal 20', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

// Prueba: multiplica -2 * 3 debe dar -6
test('multiply -2 * 3 to equal -6', () => {
  expect(calculator.multiply(-2, 3)).toBe(-6);
});

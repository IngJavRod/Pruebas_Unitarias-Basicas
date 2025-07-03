
// Suma dos numeros
const add = function(a, b) {
    return a + b;
}

// Resta dos numeros
const subtract = function(a, b) {
  return a - b;
}

// Divide dos numeros
function divide(a, b) {
  if (b === 0) {
    return "Error"; // si divide entre 0, regresa "Error"
  }
  return a / b; // si no, divide normalmente
}

// Multiplica dos numeros
function multiply(a, b){
  return a * b;
}

// Exportamos todas las funciones para poder usarlas en otras partes del proyecto
        // Module.exports = {add: add, subtract: subtract}; Antes estaba este codigo 
module.exports = {
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply
};

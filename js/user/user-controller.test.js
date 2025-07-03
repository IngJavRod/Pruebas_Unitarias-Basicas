const UserController = require("./user-controller");
const User = require("./user");

// Creamos una nueva instancia del controlador de usuarios
const userController = new UserController();

// Prueba: agregar un usuario que no esta en la lista
test('add user that is not in the list', () => {
  const newUser = new User(5678, "Ana", "ana@generation.org");
  userController.add(newUser);
  expect(userController.getUsers()).toContain(newUser);
});

// Prueba: remover un usuario que no existe no debe afectar la lista
test('remove user not in list should not change anything', () => {
  const ghostUser = new User(9999, "Ghost", "ghost@generation.org");
  const initialLength = userController.getUsers().length;
  userController.remove(ghostUser);
  expect(userController.getUsers().length).toBe(initialLength);
});

// Prueba: buscar un usuario por email debe regresar el usuario correcto
test('findByEmail should return the correct user', () => {
  const user = new User(1001, "Carlos", "carlos@generation.org");
  userController.add(user);
  expect(userController.findByEmail("carlos@generation.org")).toBe(user);
});

// Prueba: buscar por email que no existe debe regresar undefined
test('findByEmail should return undefined if not found', () => {
  expect(userController.findByEmail("fake@generation.org")).toBeUndefined();
});

// Prueba: buscar un usuario por ID debe regresar el usuario correcto
test('findById should return the correct user', () => {
  const user = new User(2002, "Laura", "laura@generation.org");
  userController.add(user);
  expect(userController.findById(2002)).toBe(user);
});

// Prueba: buscar un ID que no existe debe regresar undefined
test('findById should return undefined if id not found', () => {
  expect(userController.findById(999)).toBeUndefined();
});

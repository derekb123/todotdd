const TodoController = require('../../controllers/todo.controller');

describe('TodoController.cerateTodo', ()=> {
  it('should have a createTodo function', () => {
    expect(typeof TodoController.createTodo).toBe('function');
  });
});
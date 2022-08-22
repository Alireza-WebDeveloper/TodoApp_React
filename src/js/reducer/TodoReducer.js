const todoReducer = (listOfTodo = [], action) => {
  switch (action.type) {
    case 'LOAD_TODO':
      return action.payload;
    case 'ADD_TODO':
      return [...listOfTodo, action.payload];
    case 'DELETE_TODO':
      return listOfTodo.filter((todo) => todo.id !== action.payload.id);
    case 'COMPLETED_TODO':
      return listOfTodo.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case 'EDIT_TODO':
      return listOfTodo.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text };
        }
        return todo;
      });
    default:
      return listOfTodo;
  }
};

export default todoReducer;

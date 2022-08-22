import { async } from 'regenerator-runtime';

const InputChange = (text) => {
  return {
    type: 'INPUT_CHANGE',
    payload: { text },
  };
};

const InputStatusChange = (value) => {
  return {
    type: 'INPUTSTATUS_CHANGE',
    payload: { value },
  };
};

const AddTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      text,
      id: Math.floor(Math.random() * 1500 ** 3 * 23),
      completed: false,
    },
  };
};

const DeleteTodo = (todoItem) => {
  return {
    type: 'DELETE_TODO',
    payload: todoItem,
  };
};

const CompletedTodo = (todoItem) => {
  return {
    type: 'COMPLETED_TODO',
    payload: todoItem,
  };
};

const EditTodo = (text, id, completed) => {
  return {
    type: 'EDIT_TODO',
    payload: {
      text,
      id,
      completed,
    },
  };
};

const StatusTodo = (type, todoList) => {
  return {
    type,
    payload: todoList,
  };
};

const LoadingLocalStorageTodoList = () => {
  return {
    type: 'LOAD_TODO',
    payload: JSON.parse(localStorage.getItem('todoList')),
  };
};

export {
  InputChange,
  AddTodo,
  DeleteTodo,
  CompletedTodo,
  EditTodo,
  InputStatusChange,
  StatusTodo,
  LoadingLocalStorageTodoList,
};

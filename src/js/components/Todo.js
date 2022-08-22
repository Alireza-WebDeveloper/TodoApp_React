import React from 'react';
import Form from './Form';
import './Todo.css';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col col-lg-10 col-11 todo rounded-1  py-2">
        <h1 className="text-center text-capitalize text-header">todo list</h1>
        <Form />
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;

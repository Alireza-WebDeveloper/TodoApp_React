import React from 'react';
import { useEffect } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import { connect } from 'react-redux/es/exports';
import { LoadingLocalStorageTodoList } from '../action';
const TodoList = ({ todoList, LoadingLocalStorageTodoList }) => {
  /// Save And Load LocalStorage TodoList
  useEffect(() => {
    LoadingLocalStorageTodoList();
  }, []);
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const renderTodoList = () => {
    return todoList.map((todoItem) => {
      return <TodoItem key={todoItem.id} todoItem={todoItem} />;
    });
  };
  return (
    <div className="todo py-2">
      <ul className="todo-List list-group  navbar-nav-scroll">
        {renderTodoList()}
      </ul>
    </div>
  );
};

const mapStateProps = (state) => {
  return { todoList: state.todoList };
};

export default connect(mapStateProps, { LoadingLocalStorageTodoList })(
  TodoList
);

import './TodoItem.css';
import React from 'react';
import { DeleteTodo, CompletedTodo } from '../action';
import { connect } from 'react-redux/es/exports';
import ModalEdit from './ModalEdit';
const TodoItem = ({ todoItem, DeleteTodo, CompletedTodo }) => {
  const { text, completed, id } = todoItem;
  /// Delete TodoItem
  const DeleteTodoItem = () => {
    DeleteTodo(todoItem);
  };
  /// Completed TodoItem
  const CompletedTodoItem = () => {
    CompletedTodo(todoItem);
  };
  return (
    <React.Fragment>
      <li className=" list-group-item list-group-item-action todo-Item  d-flex justify-content-between align-items-center  flex-lg-row flex-column">
        <section
          className={`todo-Item__Details text-capitalize flex-grow-1 d-flex  ${
            completed ? 'text-decoration-line-through text-danger' : ''
          }`}
        >
          <span className="todo-Item__Text">{text}</span>
        </section>
        <section className="todo-Item__Options">
          <div className="btn-group gap-5 py-2 ">
            <button
              className="btn border-0 btn-Completed"
              data-text="complete"
              onClick={CompletedTodoItem}
            >
              <i className="bi bi-file-text icon-Completed"></i>
            </button>
            <button
              className="btn border-0 btn-Edit"
              data-text="edit"
              data-bs-toggle="modal"
              data-bs-target={`#modal_Edit_${id}`}
            >
              <i className="bi bi-credit-card-2-front icon-Edit"></i>
            </button>
            <button
              className="btn border-0 btn-Delete"
              data-text="delete"
              onClick={DeleteTodoItem}
            >
              <i className="bi bi-trash3-fill icon-Delete"></i>
            </button>
          </div>
        </section>
      </li>
      <ModalEdit todoItem={todoItem} />
    </React.Fragment>
  );
};

export default connect(null, { DeleteTodo, CompletedTodo })(TodoItem);

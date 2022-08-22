import React from 'react';
import { EditTodo } from '../action';
import { connect } from 'react-redux/es/exports';
import { useState } from 'react';
import './ModalEdit.css';
const ModalEdit = ({ todoItem, EditTodo }) => {
  const [text, setText] = useState('');
  const { id, completed } = todoItem;
  const EditTodoItem = () => {
    EditTodo(text, id, completed);
    setText('');
  };
  return (
    <div className="modal fade" id={`modal_Edit_${id}`}>
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center flex-grow-1 text-center text-capitalize">
              edit your todo
            </h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label className=" form-label fw-bold">Current text :‌</label>
              <input
                className="form-control form-control-lg text-capitalize"
                disabled
                type="text"
                value={todoItem.text}
              />
            </div>
            <div className="form-group mt-3 fw-bold">
              <label>New text :‌</label>
              <input
                className="form-control form-control-lg mt-2"
                type="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary text-capitalize"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              className="btn btn-success text-capitalize"
              data-bs-dismiss="modal"
              onClick={EditTodoItem}
            >
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { EditTodo })(ModalEdit);

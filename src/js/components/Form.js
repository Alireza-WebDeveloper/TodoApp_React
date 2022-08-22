import React from 'react';
import './Form.css';
import { InputChange, AddTodo } from '../action';
import { connect } from 'react-redux';
const Form = (props) => {
  const AddTodoOnList = (e) => {
    e.preventDefault();
    props.AddTodo(props.inputValue);
    props.InputChange('');
  };
  return (
    <div className="form py-2 ">
      <form onSubmit={AddTodoOnList}>
        <div className="input-group position-relative">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="writing..."
            id="input-Form"
            onChange={(e) => {
              props.InputChange(e.target.value);
            }}
            value={props.inputValue}
          />
          <button className="btn  border-0" id="btn-Add" type="submit">
            <i className="bi bi-plus-square-fill icon-Add"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateProps = (state) => {
  return { inputValue: state.inputValue };
};

export default connect(mapStateProps, { InputChange, AddTodo })(Form);

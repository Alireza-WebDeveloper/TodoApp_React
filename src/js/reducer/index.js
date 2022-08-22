import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';
import InputReducer from './InputReducer';
export default combineReducers({
  todoList: todoReducer,
  inputValue: InputReducer,
});

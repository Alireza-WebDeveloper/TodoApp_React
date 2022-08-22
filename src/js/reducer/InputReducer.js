const InputReducer = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return action.payload.text;
    default:
      return state;
  }
};

export default InputReducer;

export const formReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return action.form;
    case 'RESET_FORM':
      return {};
    default:
      return state;
  }
}
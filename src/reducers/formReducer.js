export const formReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return action.form;
    default:
      return state;
  }
}
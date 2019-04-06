export const mentorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MENTORS_SUCCESS':
      return action.mentors;
    default:
      return state;
  }
}
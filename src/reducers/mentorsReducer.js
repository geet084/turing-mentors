export const mentorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MENTORS_SUCCESS':
      return action.mentors;
    case 'POST_MENTOR_SUCCESS':
      return [...state, action.mentor];
    default:
      return state;
  }
}
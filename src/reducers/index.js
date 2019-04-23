import { combineReducers } from 'redux';
import { isLoadingReducer } from './isLoadingReducer';
import { hasErroredReducer } from './hasErroredReducer';
import { formReducer } from './formReducer';
import { mentorsReducer } from './mentorsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  error: hasErroredReducer,
  form: formReducer,
  mentors: mentorsReducer,
  user: userReducer,
})

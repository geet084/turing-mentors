import { isLoading, hasErrored, getMentorsSuccess } from '../actions';

export const getMentors = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      const results = await response.json();
      dispatch(getMentorsSuccess(results.data));
    } catch (error) {
      dispatch(hasErrored(error.message));
      dispatch(isLoading(false));
    }
  }
}
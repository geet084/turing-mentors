import { isLoading, hasErrored, postFormSuccess } from '../actions';

export const sendForm = (url, form) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form })
      })
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      const results = await response.json();
      console.log(results)
      // dispatch(postFormSuccess(results.data));
    } catch (error) {
      dispatch(hasErrored(error.message));
      dispatch(isLoading(false));
    }
  }
}
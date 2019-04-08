import { isLoading, hasErrored } from '../actions';

export const slack = (url, text) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        Authorization: 'Bearer xoxp- 589107782211 - 589208192226 - 600625502240 - 86d5dcab2922f8b0504a15a263e35aa4',
        body: JSON.stringify({ text })
      })
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(hasErrored(error.message));
      dispatch(isLoading(false));
    }
  }
}
import { createStore } from 'redux';
import { rootReducer } from '../index';

describe('rootReducer', () => {
  let store = createStore(rootReducer);

  it('should set the store with an initial state', () => {
    let expected = {
      isLoading: true,
      error: '',
      form: {},
      mentors: [],
    };

    expect(store.getState()).toEqual(expected);
  });

  it('should dispatch isLoading action', () => {
    const action = { type: 'IS_LOADING', isLoading: false };
    const expected = false;

    store.dispatch(action);
    expect(store.getState().isLoading).toEqual(expected);
  });

  it('should dispatch error action', () => {
    const action = { type: 'HAS_ERRORED', message: 'test' };
    const expected = 'test';

    store.dispatch(action);
    expect(store.getState().error).toEqual(expected);
  });
});
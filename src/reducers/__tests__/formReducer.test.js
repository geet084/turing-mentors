import { formReducer } from '../formReducer';
import * as actions from '../../actions';

describe('formReducer', () => {
  it('should return initial state', () => {
    const expected = {};

    const result = formReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set a form in the store', () => {
    const initialState = {};
    const form = { firstName: 'first', lastName: 'last' };
    const expected = { firstName: 'first', lastName: 'last' };

    const result = formReducer(initialState, actions.updateForm(form));

    expect(result).toEqual(expected);
  });
});
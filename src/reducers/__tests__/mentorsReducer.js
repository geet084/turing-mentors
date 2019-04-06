import { mentorsReducer } from '../mentorsReducer';
import * as actions from '../../actions';

describe('mentorsReducer', () => {
  it('should return initial state', () => {
    const expected = [];

    const result = mentorsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set an error message', () => {
    const initialState = [];
    const expected = [{ id: 1, type: 'user' }, { id: 7, type: 'user' }, { id: 19, type: 'user' }];

    const result = mentorsReducer(initialState, actions.getMentorsSuccess([{ id: 1, type: 'user' }, { id: 7, type: 'user' }, { id: 19, type: 'user' }]));

    expect(result).toEqual(expected);
  });
});
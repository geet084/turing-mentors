import * as actions from './index';

describe('actions', () => {
  it('should return the isLoading action with a type and bool', () => {
    const bool = true;
    const expected = { type: 'IS_LOADING', isLoading: true };

    const result = actions.isLoading(bool);
    expect(result).toEqual(expected);
  })

  it('should return the hasErrored action with a type and a message', () => {
    const message = 'Error';
    const expected = { type: 'HAS_ERRORED', message: 'Error' };

    const result = actions.hasErrored(message);
    expect(result).toEqual(expected);
  })

  it('should update the form with currently entered information', () => {
    const form = { firstName: 'the first name', lastName: 'the last name' };
    const expected = {
      type: 'UPDATE_FORM',
      form: {
        firstName: 'the first name',
        lastName: 'the last name'
      }
    }
    const result = actions.updateForm(form);
    expect(result).toEqual(expected);
  })
})
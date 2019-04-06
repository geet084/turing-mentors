import * as actions from './index';

describe('actions', () => {
  describe('isLoading', () => {
    it('should return the isLoading action with a type and bool', () => {
      const bool = true;
      const expected = { type: 'IS_LOADING', isLoading: true };

      const result = actions.isLoading(bool);
      expect(result).toEqual(expected);
    });
  });

  describe('hasErrored', () => {
    it('should return the hasErrored action with a type and a message', () => {
      const message = 'Error';
      const expected = { type: 'HAS_ERRORED', message: 'Error' };

      const result = actions.hasErrored(message);
      expect(result).toEqual(expected);
    });
  });

  describe('udpateForm', () => {
    it('should update the form with currently entered information', () => {
      const form = { firstName: 'the first name', lastName: 'the last name' };
      const expected = {
        type: 'UPDATE_FORM',
        form: {
          firstName: 'the first name',
          lastName: 'the last name'
        }
      };

      const result = actions.updateForm(form);
      expect(result).toEqual(expected);
    });
  });

  describe('getMentorsSuccess', () => {
    it('should get mentors from the database matching provided params', () => {
      const mentors = [{ id: 1, type: 'user' }, { id: 7, type: 'user' }, { id: 19, type: 'user' }];
      const expected = {
        type: 'GET_MENTORS_SUCCESS',
        mentors: [{ id: 1, type: 'user' }, { id: 7, type: 'user' }, { id: 19, type: 'user' }]
      };

      const result = actions.getMentorsSuccess(mentors);
      expect(result).toEqual(expected);
    });
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import { UserInfo } from './UserInfo';

describe('UserInfo', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };
  const mockState = {
    first_name: '',
    last_name: '',
    identities: [],
    cohort: 0,
    program: '',
    current_job: '',
  };

  beforeEach(() => {
    wrapper = shallow(<UserInfo {...mockProps} />);
  });

  describe('initial state & snapshot', () => {
    it('should match the correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have an default state', () => {
      const expected = mockState;

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('submitForm', () => {
    it('should handle the form submission', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'userBio'];

      wrapper.find('button').simulate('click', mockEvent);

      expect(mockProps.updateUserInfo).toHaveBeenCalledWith(expected);
    });
  });

  describe('updateIdentity', () => {
    it('should update the selected identity in state', () => {
      const mockEvent = { target: { name: 'identities', value: 1 } };
      const expected = [1];

      expect(wrapper.state('identities')).toEqual([]);
      wrapper.instance().updateIdentity(mockEvent);

      expect(wrapper.state('identities')).toEqual(expected)

    });
  });

  describe('handleChange', () => {
    it('should update the selected input in state', () => {
      const mockEvent = { target: { name: 'first_name', value: 'name here' } };
      const expected = 'name here';
      expect(wrapper.state('first_name')).toEqual('')
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('first_name')).toEqual(expected)

    });
  });

  describe('updateCohort', () => {
    it('should update the selected input in state', () => {
      const mockEvent = { target: { name: 'cohort', value: '1810' } };
      const expected = 1810;
      expect(wrapper.state('cohort')).toEqual(0);
      wrapper.instance().updateCohort(mockEvent);

      expect(wrapper.state('cohort')).toEqual(expected);
    });
  });

  describe('updateProgram', () => {
    it('should update the program', () => {
      const mockEvent = { target: { name: 'program', value: 'BE' } };
      const expected = 'BE';

      expect(wrapper.state('program')).toEqual('');
      wrapper.instance().updateProgram(mockEvent);

      expect(wrapper.state('program')).toEqual(expected);
    });
  });
});
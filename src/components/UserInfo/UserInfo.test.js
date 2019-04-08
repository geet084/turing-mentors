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
    it.skip('should update the selected identity in state', () => {
      const mockEvent = { target: { name: 'Female', value: 1 } };
      const expected = 'a';

      wrapper.find('.check-box').simulate('click', mockEvent);

      expect(wrapper.state()).toEqual(expected)

    });
  });

  describe('updateProgram', () => {
    it.skip('should update the program', () => {
      const mockEvent = { target: { name: 'BE', value: 'BE' } };
      const expected = 'a';

      wrapper.find('.aa').simulate('click', mockEvent);

      expect(wrapper.state()).toEqual(expected);
    });
  });
});
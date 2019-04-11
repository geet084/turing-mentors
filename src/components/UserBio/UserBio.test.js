import React from 'react';
import { shallow } from 'enzyme';
import { UserBio } from './UserBio';

describe('UserBio', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };
  const mockState = {
    slack: '',
    email: '',
    phone: '',
    location: '',
  };

  beforeEach(() => {
    wrapper = shallow(<UserBio {...mockProps} />);
  });
  
  describe('initial snapshot', () => {
    it('should match the correct mentee snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    
    it('should match the correct mentor snapshot', () => {
      wrapper.setProps({ user: 'Mentor' });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('submitForm', () => {
    it('should handle the form submission', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'userBackground'];

      wrapper.instance().submitForm(mockEvent);

      expect(mockProps.updateUserInfo).toHaveBeenCalledWith(expected);
    });
  });

  describe('goBack', () => {
    it('should handle going back a page', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'userInfo'];

      wrapper.instance().goBack(mockEvent);

      expect(mockProps.updateUserInfo).toHaveBeenCalledWith(expected);
    });
  });

  describe('handleChange', () => {
    it('should update the selected input in state', () => {
      const mockEvent = { target: { name: 'slack', value: 'slack handle' } };
      const expected = 'slack handle';
      expect(wrapper.state('slack')).toEqual('')
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('slack')).toEqual(expected);
    });
  });
});
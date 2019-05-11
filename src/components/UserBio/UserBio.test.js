import React from 'react';
import { shallow } from 'enzyme';
import { UserBio } from './UserBio';

describe('UserBio', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn(),
    profile: false,
  };
  const mockState = {
    slack: '',
    email: '',
    linkedin: '',
    preferred_method: '0',
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
    
    it('should match the correct profile snapshot', () => {
      wrapper.setProps({ profile: true });
      expect(wrapper).toMatchSnapshot();
    });
    
    it('should match the correct preferred_method "1" snapshot', () => {
      wrapper.setState({ preferred_method: '1' });
      expect(wrapper).toMatchSnapshot();
    });
    
    it('should match the correct preferred_method "2" snapshot', () => {
      wrapper.setState({ preferred_method: '2' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the correct preferred_method "3" snapshot', () => {
      wrapper.setState({ preferred_method: '3' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the correct preferred_method "4" snapshot', () => {
      wrapper.setState({ preferred_method: '4' });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('submitForm', () => {
    it('should handle the form submission', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'userInterests'];

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

  describe('updatePreferred', () => {
    it('should handle updating the preferred method of contact', () => {
      const mockEvent = { target: { name: 'preferred_method', value: '2' } };
      const expected = '2';

      expect(wrapper.state('preferred_method')).toEqual('0');
      wrapper.instance().updatePreferred(mockEvent);

      expect(wrapper.state('preferred_method')).toEqual(expected);
    });

    it('should handle updating the preferred method when a choice is de-selected', () => {
      const mockEvent = { target: { name: 'preferred_method', value: '2' } };
      const expected = '0';
      
      wrapper.instance().updatePreferred(mockEvent);
      expect(wrapper.state('preferred_method')).toEqual('2');
      wrapper.instance().updatePreferred(mockEvent);

      expect(wrapper.state('preferred_method')).toEqual(expected);
    })
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
import React from 'react';
import { shallow } from 'enzyme';
import { UserSchedule } from './UserSchedule';

describe('UserSchedule', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };
  const mockState = {
    availability: {
      0: [false, false, false],
      1: [false, false, false],
      2: [false, false, false],
      3: [false, false, false],
      4: [false, false, false],
      5: [false, false, false],
      6: [false, false, false],
    }
  }

  beforeEach(() => {
    wrapper = shallow(<UserSchedule {...mockProps} />);
  });

  describe('initial mentee snapshot', () => {
    it('should match the correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('initial mentor snapshot', () => {
    it('should match the correct snapshot', () => {
      wrapper.setProps({ user: 'Mentor' });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('submitForm', () => {
    it('should handle the form submission for a mentor', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'userTechSkills'];

      wrapper.instance().submitForm(mockEvent);

      expect(mockProps.updateUserInfo).toHaveBeenCalledWith(expected);
    });

    it('should handle the form submission for a mentee', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'complete'];
      wrapper.setProps({ user: 'Mentee' })

      wrapper.instance().submitForm(mockEvent);

      expect(mockProps.updateUserInfo).toHaveBeenCalledWith(expected);
    });
  });

  describe('goBack', () => {
    it('should handle going back a page', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'userBackground'];

      wrapper.instance().goBack(mockEvent);

      expect(mockProps.updateUserInfo).toHaveBeenCalledWith(expected);
    });
  });

  describe('checkBoxes', () => {
    it('should update the selected input in state', () => {
      const mockEvent = { target: { name: 'Mon', value: '01' } };
      const expected = {
        availability: {
          0: [false, true, false],
          1: [false, false, false],
          2: [false, false, false],
          3: [false, false, false],
          4: [false, false, false],
          5: [false, false, false],
          6: [false, false, false],
        }
      }

      wrapper.instance().checkBoxes(mockEvent);

      expect(wrapper.state()).toEqual(expected);
    });
  });
});
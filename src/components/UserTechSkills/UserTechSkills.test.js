import React from 'react';
import { shallow } from 'enzyme';
import { UserTechSkills } from './UserTechSkills';

describe('UserTechSkills', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };
  const mockState = {
    tech_skills: []
  };

  beforeEach(() => {
    wrapper = shallow(<UserTechSkills {...mockProps} />);
  });

  describe('initial snapshot', () => {
    it('should match the correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('submitForm', () => {
    it('should handle the form submission', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'userNonTechSkills'];

      wrapper.instance().submitForm(mockEvent);

      expect(mockProps.updateUserInfo).toHaveBeenCalledWith(expected);
    });
  });

  describe('goBack', () => {
    it('should handle going back a page', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'userSchedule'];

      wrapper.instance().goBack(mockEvent);

      expect(mockProps.updateUserInfo).toHaveBeenCalledWith(expected);
    });
  });

  describe('checkBoxes', () => {
    it('should update the selected input in state', () => {
      const mockEvent = { target: { value: 1 } };
      const expected = {
        tech_skills: [1]
      }

      wrapper.instance().checkBoxes(mockEvent);

      expect(wrapper.state()).toEqual(expected);
    });
  });
});
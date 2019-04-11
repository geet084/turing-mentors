import React from 'react';
import { shallow } from 'enzyme';
import { UserNonTechSkills } from './UserNonTechSkills';

describe('UserNonTechSkills', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };
  const mockState = {
    non_tech_skills: []
  };

  beforeEach(() => {
    wrapper = shallow(<UserNonTechSkills {...mockProps} />);
  });

  describe('initial snapshot', () => {
    it('should match the correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('submitForm', () => {
    it('should handle the form submission', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'complete'];

      wrapper.instance().submitForm(mockEvent);

      expect(mockProps.updateUserInfo).toHaveBeenCalledWith(expected);
    });
  });

  describe('goBack', () => {
    it('should handle going back a page', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = [mockState, 'userTechSkills'];

      wrapper.instance().goBack(mockEvent);

      expect(mockProps.updateUserInfo).toHaveBeenCalledWith(expected);
    });
  });

  describe('checkBoxes', () => {
    it('should update the selected input in state', () => {
      const mockEvent = { target: { value: 3 } };
      const expected = {
        non_tech_skills: [3]
      }

      wrapper.instance().checkBoxes(mockEvent);

      expect(wrapper.state()).toEqual(expected);
    });
  });
});
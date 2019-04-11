import React from 'react';
import { shallow } from 'enzyme';
import { MentorControls } from './MentorControls';

describe('MentorControls', () => {
  let wrapper;
  const mockProps = {
    handleChange: jest.fn(),
    javascript: false,
    ruby: false,
    denver: false,
    remote: false,
  }

  beforeEach(() => {
    wrapper = shallow(<MentorControls {...mockProps} />);
  });

  describe('initial', () => {
    it('should have match the correct default snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have match the correct snapshot for javascript', () => {
      wrapper.setProps({ javascript: true });
      expect(wrapper).toMatchSnapshot();
    });
   
    it('should have match the correct snapshot for ruby', () => {
      wrapper.setProps({ ruby: true });
      expect(wrapper).toMatchSnapshot();
    });
   
    it('should have match the correct snapshot for denver', () => {
      wrapper.setProps({ denver: true });
      expect(wrapper).toMatchSnapshot();
    });
   
    it('should have match the correct snapshot for remote', () => {
      wrapper.setProps({ remote: true });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('checkBoxes', () => {
    it('should update the selected input in state', () => {
      const mockEvent = { preventDefault: () => { } };

      wrapper.instance().checkBoxes(mockEvent);

      expect(mockProps.handleChange).toHaveBeenCalledWith(mockEvent);
    });
  });
});
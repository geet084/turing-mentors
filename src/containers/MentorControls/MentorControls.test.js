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
    it('should have match the correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
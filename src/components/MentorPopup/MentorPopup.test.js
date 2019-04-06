import React from 'react';
import { MentorPopup } from './MentorPopup';
import { shallow } from 'enzyme';

describe('MentorPopup', () => {
  let wrapper;

  it('should match the correct snapshot', () => {
    wrapper = shallow(<MentorPopup />)
    expect(wrapper).toMatchSnapshot()
  });
});
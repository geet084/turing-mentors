import React from 'react';
import { MentorCard } from './MentorCard';
import { shallow } from 'enzyme';

describe('MentorCard', () => {
  let wrapper;

  it('should match the correct snapshot', () => {
    wrapper = shallow(<MentorCard />)
    expect(wrapper).toMatchSnapshot()
  });
});
import React from 'react';
import { MentorCard } from './MentorCard';
import { shallow } from 'enzyme';

describe('MentorCard', () => {
  let wrapper;

  it('should match the snapshot if no tech skills are passed in', () => {
    wrapper = shallow(<MentorCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if tech skills are passed in', () => {
    wrapper = shallow(<MentorCard tech_skills={'javascript'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
import React from 'react';
import { MentorCard } from './MentorCard';
import { shallow } from 'enzyme';

describe('MentorCard', () => {
  let wrapper;
  
  it('should match the snapshot if no tech skills are passed in', () => {
    const mockProps = {
      tech_skills: ['sql']
    }
    wrapper = shallow(<MentorCard {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if tech skills are passed in', () => {
    const mockProps = {
      tech_skills: ['javascript', 'ruby']
    }
    wrapper = shallow(<MentorCard {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
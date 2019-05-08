import React from 'react';
import { shallow } from 'enzyme';
import { ProfileSection } from './ProfileSection';

describe('ProfileSection', () => {
  let wrapper;

  it('should match the correct snapshot', () => {
    wrapper = shallow(<ProfileSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
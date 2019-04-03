import React from 'react';
import { HeroImage } from './HeroImage';
import { shallow } from 'enzyme';

describe('HeroImage', () => {
  let wrapper;
  
  it('should match the correct snapshot', () => {
    wrapper = shallow(<HeroImage />)
    expect(wrapper).toMatchSnapshot()
  });
});
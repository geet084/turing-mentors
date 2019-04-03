import React from 'react';
import { Display } from './Display'
import { shallow } from 'enzyme'

describe('Display', () => {
  let wrapper;

  it('should match the correct snapshot', () => {
    wrapper = shallow(<Display />)
    expect(wrapper).toMatchSnapshot()
  });
});
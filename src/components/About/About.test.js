import React from 'react';
import { shallow } from 'enzyme';
import { About } from './About';

describe('About', () => {
  let wrapper;
  it('should have match the correct snapshot', () => {
    wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
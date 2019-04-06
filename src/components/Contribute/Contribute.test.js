import React from 'react';
import { shallow } from 'enzyme';
import { Contribute } from './Contribute';

describe('Contribute', () => {
  let wrapper;
  it('should have match the correct snapshot', () => {
    wrapper = shallow(<Contribute />);
    expect(wrapper).toMatchSnapshot();
  });
});
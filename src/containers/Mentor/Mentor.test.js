import React from 'react';
import { shallow } from 'enzyme';
import Mentor from './Mentor';

describe('Mentor', () => {
  let wrapper;

  it('should have match the correct snapshot', () => {
    wrapper = shallow(<Mentor />);
    expect(wrapper).toMatchSnapshot();
  });
});
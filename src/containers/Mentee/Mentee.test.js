import React from 'react';
import { shallow } from 'enzyme';
import Mentee from './Mentee';

describe('Mentee', () => {
  let wrapper;

  it('should have match the correct snapshot', () => {
    wrapper = shallow(<Mentee />);
    expect(wrapper).toMatchSnapshot();
  });
});
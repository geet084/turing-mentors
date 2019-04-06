import React from 'react';
import { shallow } from 'enzyme';
import Mentors from './Mentors';

describe('Mentors', () => {
  let wrapper;

  it('should have match the correct snapshot', () => {
    wrapper = shallow(<Mentors />);
    expect(wrapper).toMatchSnapshot();
  });
});
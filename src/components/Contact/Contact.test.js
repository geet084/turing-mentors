import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from './Contact';

describe('Contact', () => {
  let wrapper;
  it('should have match the correct snapshot', () => {
    wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });
});
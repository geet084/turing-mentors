import React from 'react';
import { shallow } from 'enzyme';
import { FormChoice } from './FormChoice';

describe('FormChoice', () => {
  let wrapper;
  it('should have match the correct snapshot', () => {
    wrapper = shallow(<FormChoice />);
    expect(wrapper).toMatchSnapshot();
  });
});
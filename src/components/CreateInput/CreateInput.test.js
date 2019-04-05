import React from 'react';
import { shallow } from 'enzyme';
import CreateInput from './CreateInput';

describe('CreateInput', () => {
  let wrapper;
  const mockProps = {
    field: 'field',
    text: 'someText',
    value: 'someValue',
    max: '99',
    handleChange: jest.fn()
  }
  
  it('should have match the correct snapshot', () => {
    wrapper = shallow(<CreateInput {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
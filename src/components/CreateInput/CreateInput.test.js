import React from 'react';
import { shallow } from 'enzyme';
import { CreateInput } from './CreateInput';

describe('CreateInput', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    wrapper = shallow(<CreateInput {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add a class if the input is not empty', () => {
    mockProps = {
      field: 'field',
      text: 'someText',
      value: 'not empty',
      max: '99',
      handleChange: jest.fn()
    };
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should remove a class if the input is empty', () => {
    mockProps = {
      field: 'field',
      text: 'someText',
      value: '',
      max: '99',
      handleChange: jest.fn()
    };

    expect(wrapper).toMatchSnapshot();
  });
});
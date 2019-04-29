import React from 'react';
import { shallow } from 'enzyme';
import { CreateNumberInput } from './CreateNumberInput';

describe('CreateNumberInput', () => {
  let wrapper;
  let mockProps = {
    text: '',
    value: '',
    handleChange: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<CreateNumberInput {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add a class if the input is not empty', () => {
    mockProps = {
      text: 'someText',
      value: 'not empty',
      max: '99',
      handleChange: jest.fn()
    };

    expect(wrapper).toMatchSnapshot();
  });

  it('should remove a class if the input is empty', () => {
    mockProps = {
      text: 'someText',
      value: '',
      max: '99',
      handleChange: jest.fn()
    };

    expect(wrapper).toMatchSnapshot();
  });
});
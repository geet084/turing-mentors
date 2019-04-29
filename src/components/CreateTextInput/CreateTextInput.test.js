import React from 'react';
import { shallow } from 'enzyme';
import { CreateTextInput } from './CreateTextInput';

describe('CreateTextInput', () => {
  let wrapper;
  let mockProps = {
    text: '',
    value: '',
    handleChange: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<CreateTextInput {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add a class if the input is not empty', () => {
    mockProps = {
      text: 'someText',
      value: 'not empty',
      handleChange: jest.fn()
    };

    expect(wrapper).toMatchSnapshot();
  });

  it('should remove a class if the input is empty', () => {
    mockProps = {
      text: 'someText',
      value: '',
      handleChange: jest.fn()
    };

    expect(wrapper).toMatchSnapshot();
  });
});
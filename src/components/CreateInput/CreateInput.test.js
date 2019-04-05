import React from 'react';
import { shallow } from 'enzyme';
import CreateInput from './CreateInput';

describe('CreateInput', () => {
  let wrapper;
 
  it('should match the snapshot', () => {
    const mockProps = {
      field: 'field',
      text: 'someText',
      value: 'someValue',
      max: '99',
      handleChange: jest.fn()
    }

    wrapper = shallow(<CreateInput {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
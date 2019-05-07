import React from 'react';
import { shallow } from 'enzyme';
import { CreateTextArea } from './CreateTextArea';

describe('CreateTextArea', () => {
  let wrapper;
  let mockProps = {
    background: '',
    placeholder: '',
    handleChange: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<CreateTextArea {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
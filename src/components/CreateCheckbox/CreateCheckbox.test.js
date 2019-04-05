import React from 'react';
import { shallow } from 'enzyme';
import CreateCheckbox from './CreateCheckbox';

describe('CreateCheckbox', () => {
  let wrapper;
  const mockProps = {
    field: 'field',
    name: 'name',
    value: 99,
    checkBoxes: jest.fn()
  }

  it('should have match the correct snapshot', () => {
    wrapper = shallow(<CreateCheckbox {...mockProps}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
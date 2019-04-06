import React from 'react';
import { shallow } from 'enzyme';
import { UserBio } from './UserBio';

describe('UserBio', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<UserBio {...mockProps} />);
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should register a change when the input is typed in', () => {
    const mockEvent = { target: { value: 'new info', name: 'slack' } };
    const expected = {
      slack: 'new info',
      email: '',
      phone: ''
    };

    wrapper.find('.input-effect').simulate('change', mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });
});
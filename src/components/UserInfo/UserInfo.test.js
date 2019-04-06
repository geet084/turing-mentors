import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';

describe('UserInfo', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<UserInfo {...mockProps} />);
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
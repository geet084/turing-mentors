import React from 'react';
import { shallow } from 'enzyme';
import { UserSchedule } from './UserSchedule';

describe('UserSchedule', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<UserSchedule {...mockProps} />);
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
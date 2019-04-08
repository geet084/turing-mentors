import React from 'react';
import { shallow } from 'enzyme';
import { UserTechSkills } from './UserTechSkills';

describe('UserTechSkills', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<UserTechSkills {...mockProps} />);
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
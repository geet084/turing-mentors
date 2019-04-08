import React from 'react';
import { shallow } from 'enzyme';
import { UserNonTechSkills } from './UserNonTechSkills';

describe('UserNonTechSkills', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<UserNonTechSkills {...mockProps} />);
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
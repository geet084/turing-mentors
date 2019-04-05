import React from 'react';
import { shallow } from 'enzyme';
import UserBackground from './UserBackground';

describe('UserBackground', () => {
  let wrapper;
  it('should match the correct snapshot', () => {
    wrapper = shallow(<UserBackground />);
    expect(wrapper).toMatchSnapshot();
  });
});
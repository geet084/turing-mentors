import React from 'react';
import { shallow } from 'enzyme';
import { UserBackground } from './UserBackground';

describe('UserBackground', () => {
  let wrapper;
  const mockProps = {
    updateUserInfo: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<UserBackground {...mockProps} />);

  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should register a change when the input is typed in', () => {
    const mockEvent = { target: { value: 'new info', name: 'background' } };
    const expected = {
      background: 'new info'
    };

    wrapper.find('.bg-info').simulate('change', mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it('should go back a page when the back button is clicked', () => {
    const mockEvent = { preventDefault: () => { } }

    wrapper.find('.prev-btn').simulate('click', mockEvent);
    expect(mockProps.updateUserInfo).toHaveBeenCalled()
  });

  it('should go to the page when the next button is clicked', () => {
    const mockEvent = { preventDefault: () => { } }

    wrapper.find('.next-btn').simulate('click', mockEvent);
    expect(mockProps.updateUserInfo).toHaveBeenCalled()
  });
});
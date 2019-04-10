import React from 'react';
import { MentorPopup } from './MentorPopup';
import { shallow } from 'enzyme';

describe('MentorPopup', () => {
  let wrapper;
  let mockProps = {
    id: 1,
    name: 'some name',
    availability: {
      0: [false, true, false],
      1: [false, true, false],
      2: [false, true, false],
      3: [false, true, false],
      4: [false, true, false],
      5: [false, true, false],
      6: [false, true, false]
    },
    tech_skills: ['skill'],
    non_tech_skills: ['skill'],
    contact_details: {slack: 'user'},
    sendMessage: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<MentorPopup {...mockProps} />);
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle change of the slack message input', () => {
    const mockEvent = { target: { value: 'new message' } };

    wrapper.find('.bg-info').simulate('change', mockEvent);

    expect(wrapper.state()).toEqual({ text: 'new message' });
  });

  it('should handle submitting the new slack message', () => {
    const mockEvent = { target: { value: 'new message' } };
    const mockMessage = 'user: new message';

    wrapper.find('.bg-info').simulate('change', mockEvent);
    wrapper.find('button').simulate('click');
    expect(wrapper.state()).toEqual({ text: '' });
    expect(mockProps.sendMessage).toHaveBeenCalledWith(mockMessage);
  });
});
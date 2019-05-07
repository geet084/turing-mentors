import React from 'react';
import { MentorPopup } from './MentorPopup';
import { shallow } from 'enzyme';

describe('MentorPopup', () => {
  let wrapper;
  let mockProps = {
    id: 1,
    name: 'some name',
    identities: [1],
    availability: {
      0: [false, false, false],
      1: [false, false, false],
      2: [false, false, false],
      3: [false, false, false],
      4: [false, false, false],
      5: [false, false, false],
      6: [false, false, false]
    },
    tech_skills: ['skill'],
    non_tech_skills: ['skill'],
    contact_details: {slack: 'user'},
    sendMessage: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<MentorPopup {...mockProps} />);
  });

  it('should match the correct default snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the correct snapshot with availabilities', () => {
    wrapper.setProps({
      availability: {
        0: [false, true, false],
        1: [false, true, false],
        2: [false, true, false],
        3: [false, true, false],
        4: [false, true, false],
        5: [false, true, false],
        6: [false, true, false]
      },
    })
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle change of the slack message input', () => {
    const mockEvent = { target: { value: 'new message' } };

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state()).toEqual({ text: 'new message' });
  });

  it('should handle submitting the new slack message', () => {
    const mockMessage = 'user: new message';
    wrapper.setState({ text: 'new message' }
    )
    wrapper.instance().handleSubmit();
    
    expect(wrapper.state()).toEqual({ text: '' });
    expect(mockProps.sendMessage).toHaveBeenCalledWith(mockMessage);
  });
});
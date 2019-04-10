import React from 'react';
import { Display, mapStateToProps, mapDispatchToProps } from './Display';
import { shallow } from 'enzyme';
import { sendSlack } from '../../actions';

describe('Display', () => {
  let wrapper;
  const mockProps = {
    sendSlack: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<Display {...mockProps} />)
  });

  describe('initial', () => {
    it('should have match the correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('sendMessage', () => {
    it('should handle sending a message to Slack', () => {
      const mockMessage = 'Hello slack!';
      const cors = 'https://cors-anywhere.herokuapp.com/'
      const url = 'https://hooks.slack.com/services/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'
      const expected = 'Hello slack!';
      
      wrapper.instance().sendMessage(mockMessage);

      expect(mockProps.sendSlack).toHaveBeenCalledWith(cors + url, expected);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an array of mentors', () => {
      const mockState = {
        mentors: [],
        stuff: {},
        things: '',
      };

      const expected = {
        mentors: []
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call sendSlack dispatch', () => {
      const mockDispatch = jest.fn();
      const mockURL = 'http://localhost:3010';
      const mockMessage = "hello!"
      //TODO: adjust to pass a more robust test
      // const actionToDispatch = sendSlack(mockURL, mockMessage);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.sendSlack(mockURL, mockMessage);

      // expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
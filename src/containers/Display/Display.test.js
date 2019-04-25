import React from 'react';
import { Display, mapStateToProps, mapDispatchToProps } from './Display';
import { shallow, mount } from 'enzyme';
import { sendSlack } from '../../actions';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../../reducers/index';
import thunk from 'redux-thunk';
import MentorPopup from '../../components/MentorPopup/MentorPopup';

describe('Display', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  let wrapper;
  const mockProps = {
    sendSlack: jest.fn(),
    mentors: [{
      id: '1',
      attributes: {
        first_name: "Jeff",
        last_name: "Casimir",
        identities: [1],
        contact_details: {
          slack: "@j3",
          email: "jeff@email.com",
          phone: "3037313117",
          linkedin: 'jeff-casimir-839123',
          preferred_method: '1',
        },
        cohort: 1401,
        program: "BE",
        current_job: "Director",
        location: "Denver, CO",
        background: "Things",
        availability: {
          0: [true, false, false],
          1: [true, false, false],
          2: [true, false, false],
          3: [true, false, false],
          4: [true, false, false],
          5: [false, true, false],
          6: [false, true, false],
        },
        tech_skills: ["1", "2", "7"],
        non_tech_skills: ["1", "3", "5"]
      }
    }]
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

  describe('routes', () => {
    it('should render a specific mentor if found', () => {
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/mentors/1']}>
            <Display {...mockProps} />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(MentorPopup)).toHaveLength(1)
    });

    it('should render a not found if no mentors are found', () => {
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/mentors/-1']}>
            <Display {...mockProps} />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(MentorPopup)).toHaveLength(0)
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
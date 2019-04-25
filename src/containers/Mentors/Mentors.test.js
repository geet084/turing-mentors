import React from 'react';
import { shallow } from 'enzyme';
import { Mentors, mapStateToProps, mapDispatchToProps } from './Mentors';
import { getMentors } from '../../actions';

describe('Mentors', () => {
  let wrapper;
  const mockProps = {
    getMentors: jest.fn(),
    mentors: [{ id: 1, first_name: 'first' }, { id: 2, first_name: 'second' }]
  }

  beforeEach(() => {
    wrapper = shallow(<Mentors {...mockProps} />);
  });

  describe('initial', () => {
    it('should have match the default snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have match the default snapshot with no mentors', () => {
      wrapper.setProps({ mentors: [] })
      expect(wrapper).toMatchSnapshot();
    });

    it('should have match the default snapshot with mentors', () => {
      wrapper.setProps({ mentors: [{ id: 1 }, { id: 2 }] })
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('getUpdated', () => {
    it('should retrieve the correct list of mentors in denver', () => {
      const mockURL = 'https://cors-anywhere.herokuapp.com/https://turing-mentors-be.herokuapp.com/api/v1/mentors?location=denver';
      const mockEvent = { target: { name: 'denver' } };

      wrapper.instance().handleChange(mockEvent);

      expect(mockProps.getMentors).toHaveBeenCalledWith(mockURL)
    });

    it('should retrieve the correct list of mentors not in denver', () => {
      const mockURL = 'https://cors-anywhere.herokuapp.com/https://turing-mentors-be.herokuapp.com/api/v1/mentors?location=remote';
      const mockEvent = { target: { name: 'remote' } };

      wrapper.instance().handleChange(mockEvent);

      expect(mockProps.getMentors).toHaveBeenCalledWith(mockURL)
    });

    it('should retrieve the correct list of mentors with javascript', () => {
      const mockURL = 'https://cors-anywhere.herokuapp.com/https://turing-mentors-be.herokuapp.com/api/v1/mentors?location=all&tech_skills=javascript';
      const mockEvent = { target: { name: 'javascript' } };

      wrapper.instance().handleChange(mockEvent);

      expect(mockProps.getMentors).toHaveBeenCalledWith(mockURL)
    });

    it('should retrieve the correct list of mentors with ruby', () => {
      const mockURL = 'https://cors-anywhere.herokuapp.com/https://turing-mentors-be.herokuapp.com/api/v1/mentors?location=all&tech_skills=ruby';
      const mockEvent = { target: { name: 'ruby' } };

      wrapper.instance().handleChange(mockEvent);

      expect(mockProps.getMentors).toHaveBeenCalledWith(mockURL)
    });
  });

  describe('handleChange', () => {
    it('should update the selected input in state', () => {
      const mockEvent = { target: { name: 'javascript' } };
      const expected = true;
      expect(wrapper.state('javascript')).toEqual(false)
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('javascript')).toEqual(expected);
    });
  });

  describe('handleSearch', () => {
    it('should update the selected input in state', () => {
      const mockEvent = { target: { name: 'mentorSearch', value: 'search param' } };
      const expected = 'search param';
      expect(wrapper.state('mentorSearch')).toEqual('')
      wrapper.instance().handleSearch(mockEvent);

      expect(wrapper.state('mentorSearch')).toEqual(expected);
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
    it('should call getMentors dispatch', () => {
      const mockDispatch = jest.fn();
      const mockURL = 'http://localhost:3010';
      //TODO: adjust to pass a more robust test
      // const actionToDispatch = getMentors(mockURL);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getMentors(mockURL);

      // expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
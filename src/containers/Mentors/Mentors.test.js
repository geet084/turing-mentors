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
    it('should have match the correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
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
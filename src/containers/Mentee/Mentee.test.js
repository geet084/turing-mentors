import React from 'react';
import { shallow } from 'enzyme';
import Mentee from './Mentee';
import { mapStateToProps } from './Mentee';

describe('Mentee', () => {
  let wrapper;

  it('should have match the correct snapshot', () => {
    wrapper = shallow(<Mentee />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with all form details', () => {
      const mockState = { firstName: '', lastName: '' };
      
      const expected = {};
      
      const mappedProps = mapStateToProps(mockState);
      
      expect(mappedProps).toEqual(expected);
    });
  });
});
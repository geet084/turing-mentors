import React from 'react';
import { shallow } from 'enzyme';
import { Profile, mapStateToProps } from './Profile';

describe('Profile', () => {
  let wrapper;
  const mockProps = {
    user: {
      first_name: '',
      last_name: '',
      identities: [],
      location: '',
      cohort: '',
      program: '',
      current_job: '',
      slack: '',
      email: '',
      phone: '',
      linkedin: '',
      preferred_method: '',
      background: '',
      tech_skills: [],
      non_tech_skills: [],
      availability: {}
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Profile {...mockProps} />);
  });

  describe('initial', () => {
    it('should have match the correct default snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have match the correct props snapshot', () => {
      wrapper.setProps({
        user: {
          first_name: 'first',
          last_name: 'last',
          identities: [1],
          location: 'Denver',
          cohort: '1810',
          program: 'FE',
          current_job: 'Person',
          slack: 'slack',
          email: 'email',
          phone: '1910201231',
          linkedin: 'linkedin',
          preferred_method: '1',
          background: 'things and stuff',
          tech_skills: ['1', '3'],
          non_tech_skills: ['2', '4'],
          availability: {
            0: [false, false, true],
            1: [false, false, true],
            2: [false, false, true],
            3: [false, false, true],
            4: [false, false, true],
            5: [false, false, true],
            6: [false, false, true],
          }
        }
      })
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return a user object', () => {
      const mockState = {
        user: {},
        stuff: {},
        things: '',
      };

      const expected = {
        user: {}
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
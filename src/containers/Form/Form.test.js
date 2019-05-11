import React from 'react';
import { shallow } from 'enzyme';
import { Form, mapStateToProps, mapDispatchToProps } from './Form';
import { resetForm, updateForm } from '../../actions';
import { sendForm } from '../../thunks/sendForm';

describe('Form', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      location: {
        pathname: '/mentor'
      },
      updateForm: jest.fn(),
      sendForm: jest.fn(),
    };

    wrapper = shallow(<Form {...mockProps} />);
  });

  describe('snapshots', () => {
    it('should have match a page one snapshot(default) for mentor', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have match a page one snapshot(default) for mentee', () => {
      wrapper.setProps({ location: { pathname: '/mentee' } })

      expect(wrapper).toMatchSnapshot();
    });

    it('should have match a page two snapshot', () => {
      wrapper.setState({ currentSection: 'userBio' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should have match a page two snapshot', () => {
      wrapper.setState({ currentSection: 'userBackground' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should have match a page three snapshot', () => {
      wrapper.setState({ currentSection: 'userSchedule' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should have match a page four snapshot', () => {
      wrapper.setState({ currentSection: 'complete' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should have match a page five snapshot', () => {
      wrapper.setState({ currentSection: 'userTechSkills' });

      expect(wrapper).toMatchSnapshot();
    });

    it('should have match a page six snapshot', () => {
      wrapper.setState({ currentSection: 'userNonTechSkills' });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('default state', () => {
    it('should have a default state', () => {
      const mockState = {
        userInfo: {},
        userBio: {},
        userBackground: {},
        userInterests: [],
        userSchedule: {},
        userTechSkills: [],
        userNonTechSkills: [],
        currentSection: 'userInfo',
      };

      expect(wrapper.state()).toEqual(mockState)
    });
  });

  describe('updateUserInfo', () => {
    it('should update user info', () => {
      const expected = {
        userInfo: {
          first_name: 'first name',
          last_name: 'last name',
          identities: [1],
          cohort: 1810,
          program: 'FE',
          current_job: 'student',
        },
        userBio: {},
        userBackground: {},
        userInterests: [],
        userSchedule: {},
        userTechSkills: [],
        userNonTechSkills: [],
        currentSection: 'userBio',
      };
      const mockInfo = [expected.userInfo, 'userBio'];

      wrapper.instance().updateUserInfo(mockInfo);

      expect(wrapper.state()).toEqual(expected);
    });

    it('should submit the form when completed', () => {
      const initialState = {
        userInfo: {
          first_name: 'first name',
          last_name: 'last name',
          identities: [1],
          cohort: 1810,
          program: 'FE',
          current_job: 'student',
        },
        userBio: { slack: 'slack' },
        userBackground: { background: 'bg' },
        userInterests: [],
        userSchedule: {},
        userTechSkills: ['1'],
        userNonTechSkills: ['4'],
        currentSection: 'userNonTechSkills',
      };
      const expected = {
        userInfo: {
          first_name: 'first name',
          last_name: 'last name',
          identities: [1],
          cohort: 1810,
          program: 'FE',
          current_job: 'student',
        },
        userBio: { slack: 'slack' },
        userBackground: { background: 'bg' },
        userInterests: [],
        userSchedule: {},
        userTechSkills: ['1'],
        userNonTechSkills: ['4'],
        currentSection: 'complete',
      };
      const mockInfo = [expected.userNonTechSkills, 'complete'];
      wrapper.setState(initialState)
      wrapper.instance().updateUserInfo(mockInfo);

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('submitForm', () => {
    it('should submit a completed form', () => {
      const mockEvent = { preventDefault: () => { } };
      const expected = {
        userInfo: {},
        userBio: {},
        userBackground: {},
        userInterests: [],
        userSchedule: {},
        userTechSkills: [],
        userNonTechSkills: [],
        currentSection: 'userInfo',
      };

      wrapper.instance().submitForm(mockEvent);

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('resetForm', () => {
    it('should reset the form after it has been completed', () => {
      const expected = {
        userInfo: {},
        userBio: {},
        userBackground: {},
        userInterests: [],
        userSchedule: {},
        userTechSkills: [],
        userNonTechSkills: [],
        currentSection: 'userInfo',
      };

      wrapper.instance().reset();

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with all form details', () => {
      const mockState = { firstName: '', lastName: '' };

      const expected = {};

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call updateForm dispatch', () => {
      const mockDispatch = jest.fn()
      const mockForm = { firstName: 'name', lastName: 'last name' }

      const actionToDispatch = updateForm(mockForm)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.updateForm(mockForm)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call sendForm dispatch', () => {
      const mockDispatch = jest.fn();
      const mockURL = 'http://localhost:3000';
      const mockForm = { firstName: 'name', lastName: 'last name' }

      const actionToDispatch = sendForm(mockURL, mockForm)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.sendForm(mockURL, mockForm)

      expect(mockDispatch).toHaveBeenCalled();
      // TODO: NEED TO FIX THIS
      // expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call resetForm dispatch', () => {
      const mockDispatch = jest.fn()
      
      const actionToDispatch = resetForm()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.resetForm()

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  })
});
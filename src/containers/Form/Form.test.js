import React from 'react';
import { shallow } from 'enzyme';
import { Form, mapStateToProps, mapDispatchToProps } from './Form';
import { updateForm } from '../../actions';

describe('Form', () => {
  let wrapper;
  let mockProps = {
    location: {
      pathname: '/mentor'
    }
  }

  describe('snapshots', () => {
    beforeEach(() => {
      wrapper = shallow(<Form {...mockProps}/>);
    });

    it('should have match a page one snapshot(default)', () => {
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
    })
  })
});
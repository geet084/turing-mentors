import React, { Component } from 'react';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBio from '../../components/UserBio/UserBio';
import UserBackground from '../../components/UserBackground/UserBackground';
import UserSchedule from '../../components/UserSchedule/UserSchedule';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateForm } from '../../actions';

class Mentee extends Component {
  state = {
    userInfo: {},
    userBio: {},
    userBackground: {},
    userSchedule: {},
    currentSection: 'userInfo',
    // currentSection: 'userSchedule',
  }

  updateUserInfo = (info) => {
    const updatedSection = this.state.currentSection;
    const currentSection = info.pop();
    const data = info.pop()

    this.setState({ [updatedSection]: data, currentSection })
    this.props.updateForm({ ...this.props.form, ...data })
  }

  submitForm = (e) => {
    e.preventDefault();
  }

  render() {
    const { currentSection } = this.state;
    return (
      <div>
        {currentSection === 'userInfo' && <UserInfo updateUserInfo={this.updateUserInfo} />}
        {currentSection === 'userBio' && <UserBio updateUserInfo={this.updateUserInfo} />}
        {currentSection === 'userBackground' && <UserBackground updateUserInfo={this.updateUserInfo} />}
        {currentSection === 'userSchedule' && <UserSchedule updateUserInfo={this.updateUserInfo} />}
        {this.state.currentSection === 'complete' && <div><h1>Thank you!</h1><Link to='/'>Return Home</Link> </div>}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  form: state.form,
})

export const mapDispatchToProps = (dispatch) => ({
  updateForm: (form) => dispatch(updateForm(form)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Mentee);
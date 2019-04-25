import React, { Component } from 'react';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBio from '../../components/UserBio/UserBio';
import UserBackground from '../../components/UserBackground/UserBackground';
import UserSchedule from '../../components/UserSchedule/UserSchedule';
import UserTechSkills from '../../components/UserTechSkills/UserTechSkills';
import UserNonTechSkills from '../../components/UserNonTechSkills/UserNonTechSkills';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetForm, updateForm } from '../../actions';
import { sendForm } from '../../thunks/sendForm';

export class Form extends Component {
  state = {
    userInfo: {},
    userBio: {},
    userBackground: {},
    userSchedule: {},
    userTechSkills: [],
    userNonTechSkills: [],
    currentSection: 'userInfo',
  }

  updateUserInfo = (info) => {
    const updatedSection = this.state.currentSection;
    const currentSection = info.pop();
    const data = info.pop()

    this.props.updateForm({ ...this.props.form, ...data })
    this.setState({ [updatedSection]: data, currentSection })

    if (currentSection === 'complete') {
      this.submitForm({ ...this.props.form, ...data })
    }
  }

  submitForm = (form) => {
    const corsPrefix = 'https://cors-anywhere.herokuapp.com/';
    const root = 'https://turing-mentors-be.herokuapp.com';
    const path = `/api/v1/mentors`;
    const url = corsPrefix + root + path;
    this.props.sendForm(url, form)
  }

  reset = () => {
    this.setState({
      userInfo: {},
      userBio: {},
      userBackground: {},
      userSchedule: {},
      userTechSkills: [],
      userNonTechSkills: [],
      currentSection: 'userInfo',
    });
  }

  render() {
    const { currentSection, userInfo, userBio, userBackground, userSchedule, userTechSkills, userNonTechSkills } = this.state;
    const mentor = this.props.location.pathname === '/mentor';
    const user = mentor ? 'Mentor' : 'Mentee';

    return (
      <div>
        {currentSection === 'userInfo' &&
          <UserInfo updateUserInfo={this.updateUserInfo} user={user} {...userInfo} />}
        {currentSection === 'userBio' &&
          <UserBio updateUserInfo={this.updateUserInfo} user={user} {...userBio} />}
        {currentSection === 'userBackground' &&
          <UserBackground updateUserInfo={this.updateUserInfo} user={user} {...userBackground} />}
        {currentSection === 'userSchedule' &&
          <UserSchedule updateUserInfo={this.updateUserInfo} user={user} {...userSchedule} />}
        {mentor && currentSection === 'userTechSkills' &&
          <UserTechSkills updateUserInfo={this.updateUserInfo} user={user} {...userTechSkills} />}
        {mentor && currentSection === 'userNonTechSkills' &&
          <UserNonTechSkills updateUserInfo={this.updateUserInfo} user={user} {...userNonTechSkills} />}
        {currentSection === 'complete' &&
          <div className="complete"><h1>Thank you!</h1><Link to='/' onClick={this.reset}>Return Home</Link> </div>}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  form: state.form,
})

export const mapDispatchToProps = (dispatch) => ({
  updateForm: (form) => dispatch(updateForm(form)),
  sendForm: (url, form) => dispatch(sendForm(url, form)),
  resetForm: () => dispatch(resetForm()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
import React, { Component } from 'react';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBio from '../../components/UserBio/UserBio';
import UserBackground from '../../components/UserBackground/UserBackground';
import UserSchedule from '../../components/UserSchedule/UserSchedule';
import UserTechSkills from '../../components/UserTechSkills/UserTechSkills';
import UserNonTechSkills from '../../components/UserNonTechSkills/UserNonTechSkills';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateForm } from '../../actions';
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
    const { currentSection } = this.state;
    const mentor = this.props.location.pathname === '/mentor';
    const userInfo = currentSection === 'userInfo';
    const userBio = currentSection === 'userBio';
    const userBackground = currentSection === 'userBackground';
    const userSchedule = currentSection === 'userSchedule';
    const userTechSkills = currentSection === 'userTechSkills'
    const userNonTechSkills = currentSection === 'userNonTechSkills'
    const complete = currentSection === 'complete';
    const user = mentor ? 'Mentor' : 'Mentee';

    return (
      <div>
        {userInfo && <UserInfo updateUserInfo={this.updateUserInfo} user={user} />}
        {userBio && <UserBio updateUserInfo={this.updateUserInfo} user={user} />}
        {userBackground && <UserBackground updateUserInfo={this.updateUserInfo} user={user} />}
        {userSchedule && <UserSchedule updateUserInfo={this.updateUserInfo} user={user} />}
        {mentor && userTechSkills && <UserTechSkills updateUserInfo={this.updateUserInfo} user={user} />}
        {mentor && userNonTechSkills && <UserNonTechSkills updateUserInfo={this.updateUserInfo} user={user} />}
        {complete && <div><h1>Thank you!</h1><Link to='/' onClick={this.reset}>Return Home</Link> </div>}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
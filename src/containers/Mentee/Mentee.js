import React, { Component } from 'react';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBio from '../../components/UserBio/UserBio';
import UserSchedule from '../../components/UserSchedule/UserSchedule';

export class Mentee extends Component {
  state = {
    userInfo: {},
    userBio: {},
    userSchedule: {},
    currentSection: 'userInfo',
    // currentSection: 'userBio',
    // currentSection: 'userSchedule',
  }

  updateUserInfo = (info) => {
    const updatedSection = this.state.currentSection;
    const currentSection = info.pop();

    this.setState({ [updatedSection]: info.pop(), currentSection })
  }

  submitForm = (e) => {
    e.preventDefault();
  }

  render() {
    console.log('aa', this.state)
    const { currentSection } = this.state;

    return (
      <div>
        {currentSection === 'userInfo' && <UserInfo updateUserInfo={this.updateUserInfo} />}
        {currentSection === 'userBio' && <UserBio updateUserInfo={this.updateUserInfo} />}
        {currentSection === 'userSchedule' && <UserSchedule updateUserInfo={this.updateUserInfo} />}
        {this.state.currentSection === 'complete' && <div><h1>ALL DONE</h1></div>}
      </div>
    )
  }
}

export default Mentee;
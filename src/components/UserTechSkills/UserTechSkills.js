import React, { Component } from 'react';

export class UserTechSkills extends Component {
  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userNonTechSkills']);
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userSchedule']);
  }

  render() {
    const mentor = this.props.user === 'Mentor';

    return (
      <div className="form-page">
        <h2>tech skills checkboxes here</h2>
        <button className="next-btn" onClick={this.goBack}>Back</button>
        <button className="next-btn" onClick={this.submitForm}>Next</button>
        <span className="pages">5 of {mentor ? '6' : '4'}</span>
      </div>
    )
  }
}

export default UserTechSkills;
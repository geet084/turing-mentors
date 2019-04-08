import React, { Component } from 'react';

export class UserNonTechSkills extends Component {
  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'complete']);
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userTechSkills']);
  }

  render() {
    const mentor = this.props.user === 'Mentor';

    return (
      <div className="form-page">
        <h2>NON tech skills checkboxes here</h2>
        <button className="next-btn" onClick={this.goBack}>Back</button>
        <button className="next-btn" onClick={this.submitForm}>Submit</button>
        <span className="pages">6 of {mentor ? '6' : '4'}</span>
      </div>
    )
  }
}

export default UserNonTechSkills;
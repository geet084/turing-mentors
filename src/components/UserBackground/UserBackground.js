import React, { Component } from 'react';

export class UserBackground extends Component {
  state = {
    background: '',
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userSchedule']);
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userBio']);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { background } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          <span className="pages"> Background info:</span>
          <textarea
            className="bg-info"
            type="text"
            placeholder="Tell us a bit about yourself"
            name='background'
            rows="18"
            cols="30"
            value={background}
            onChange={this.handleChange} />
        </form>
        <button className="prev-btn" onClick={this.goBack}>Back</button>
        <button className="next-btn" onClick={this.submitForm}>Next</button>
        <span className="pages">3 of 4</span>
      </div>
    )
  }
}

export default UserBackground;
import React, { Component } from 'react';

export class UserBackground extends Component {
  constructor(props) {
    super(props)
    const { background } = this.props

    this.state = {
      background: background || '',
    }
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
    const { profile, user } = this.props;

    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          {!profile && <span className="pages">{user} Background info:</span>}
          <textarea
            className="bg-info"
            type="text"
            placeholder="Tell us a bit about yourself"
            name='background'
            rows="18"
            cols="40"
            value={background}
            onChange={this.handleChange} />
        </form>
        {!profile && <button className="prev-btn" onClick={this.goBack}>Back</button>}
        {!profile && <button className="next-btn" onClick={this.submitForm}>Next</button>}
        {!profile && <span className="pages">3 of {user === 'Mentor' ? '6' : '4'}</span>}
      </div>
    )
  }
}

export default UserBackground;
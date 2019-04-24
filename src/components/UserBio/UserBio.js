import React, { Component } from 'react';
import { CreateInput } from '../CreateInput/CreateInput';

export class UserBio extends Component {
  constructor(props) {
    super(props)
    const { slack, email, phone, location } = this.props

    this.state = {
      slack: slack || '',
      email: email || '',
      phone: phone || '',
      location: location || '',
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userBackground']);
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userInfo']);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { slack, email, phone, location } = this.state;
    const { profile, user } = this.props;

    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          {!profile && <span className="pages">{user} Contact info:</span>}
          <CreateInput field="slack" text="Slack Handle" value={slack} handleChange={this.handleChange} max="28" />
          <CreateInput field="email" text="Email Address" value={email} handleChange={this.handleChange} max="28" />
          <CreateInput field="phone" text="Phone Number" value={phone} handleChange={this.handleChange} max="12" />
          {
            user === 'Mentor' &&
            <CreateInput field="location" text="Location" value={location} handleChange={this.handleChange} max="28" />
          }
        </form>
        {!profile && <button className="next-btn" onClick={this.goBack}>Back</button>}
        {!profile && <button className="next-btn" onClick={this.submitForm}>Next</button>}
        {!profile && <span className="pages">2 of {user === 'Mentor' ? '6' : '4'}</span>}
      </div>
    )
  }
}

export default UserBio;
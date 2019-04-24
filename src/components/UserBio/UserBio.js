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
    const mentor = this.props.user === 'Mentor';

    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          <span className="pages">{this.props.user} Contact info:</span>
          <CreateInput field="slack" text="Slack Handle" value={slack} handleChange={this.handleChange} max="28" />
          <CreateInput field="email" text="Email Address" value={email} handleChange={this.handleChange} max="28" />
          <CreateInput field="phone" text="Phone Number" value={phone} handleChange={this.handleChange} max="12" />
          {
            mentor &&
            <CreateInput field="location" text="Location" value={location} handleChange={this.handleChange} max="28" />
          }
        </form>
        <button className="next-btn" onClick={this.goBack}>Back</button>
        <button className="next-btn" onClick={this.submitForm}>Next</button>
        <span className="pages">2 of {mentor ? '6' : '4'}</span>
      </div>
    )
  }
}

export default UserBio;
import React, { Component } from 'react';
import { CreateInput } from '../CreateInput/CreateInput';

export class UserBio extends Component {
  state = {
    slack: '',
    email: '',
    phone: '',
    background: '',
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userSchedule']);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { slack, email, phone, background } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          <label> Contact info:
            <CreateInput field="slack" text="Slack Handle" value={slack} handleChange={this.handleChange} max="28" />
            <CreateInput field="email" text="Email Address" value={email} handleChange={this.handleChange} max="28" />
            <CreateInput field="phone" text="Phone Number" value={phone} handleChange={this.handleChange} max="12" />
          </label>
          <label> Background:<textarea type="text" name='background' value={background} onChange={this.handleChange} /></label>
        </form>
        <button onClick={this.submitForm}>Next</button>
        <p>2 of 3</p>
      </div>
    )
  }
}

export default UserBio;
import React, { Component } from 'react';
import { CreateInput } from '../CreateInput/CreateInput';

export class UserBio extends Component {
  state = {
    slack: '',
    email: '',
    phone: '',
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userBackground']);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { slack, email, phone } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          <span className="pages"> Contact info:</span>
            <CreateInput field="slack" text="Slack Handle" value={slack} handleChange={this.handleChange} max="28" />
            <CreateInput field="email" text="Email Address" value={email} handleChange={this.handleChange} max="28" />
            <CreateInput field="phone" text="Phone Number" value={phone} handleChange={this.handleChange} max="12" />
        </form>
        <button className="next-btn" onClick={this.submitForm}>Next</button>
        <span className="pages">2 of 4</span>
      </div>
    )
  }
}

export default UserBio;
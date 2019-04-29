import React, { Component } from 'react';
import { CreateNumberInput } from '../CreateNumberInput/CreateNumberInput';
import { CreateTextInput } from '../CreateTextInput/CreateTextInput';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserBio extends Component {
  constructor(props) {
    super(props)
    const { slack, email, phone, location, linkedin, preferred_method } = this.props

    this.state = {
      email: email || '',
      slack: slack || '',
      linkedin: linkedin || '',
      phone: phone || '',
      location: location || '',
      preferred_method: preferred_method || '0',
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

  updatePreferred = ({ target }) => {
    const { preferred_method } = this.state;
    let choice;
    if (preferred_method === target.value) choice = '0'
    else choice = target.value

    this.setState({ [target.name]: choice })
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { slack, email, phone, location, linkedin, preferred_method } = this.state;
    const { profile, user } = this.props;

    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          {!profile && <span className="pages">{user} Contact info:</span>}
          <CreateTextInput text="Slack Handle" value={slack} handleChange={this.handleChange} />
          <CreateTextInput text="Email Address" value={email} handleChange={this.handleChange} />
          <CreateTextInput text="LinkedIn" value={linkedin} handleChange={this.handleChange} />
          <CreateNumberInput text="Phone Number" value={phone} handleChange={this.handleChange} max="12" />
          <p className="pages">Preferred Method of Contact:</p>
          <CreateCheckbox field="preferred_method" name="Email" value={1} checkBoxes={this.updatePreferred} checked={preferred_method === "1" ? true : false} />
          <CreateCheckbox field="preferred_method" name="Slack" value={2} checkBoxes={this.updatePreferred} checked={preferred_method === "2" ? true : false} />
          <CreateCheckbox field="preferred_method" name="LinkedIn" value={3} checkBoxes={this.updatePreferred} checked={preferred_method === "3" ? true : false} />
          <CreateCheckbox field="preferred_method" name="Phone" value={4} checkBoxes={this.updatePreferred} checked={preferred_method === "4" ? true : false} />
          {
            user === 'Mentor' &&
            <CreateTextInput text="Location" value={location} handleChange={this.handleChange} />
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
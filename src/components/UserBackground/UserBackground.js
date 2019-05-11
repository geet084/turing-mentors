import React, { Component } from 'react';
import { CreateTextArea } from '../CreateTextArea/CreateTextArea';

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
    this.props.updateUserInfo([this.state, 'userInterests']);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { background } = this.state;
    const { profile, user } = this.props;
    const placeholder = background ? background : "Tell us a bit about yourself";
    
    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          {!profile && <span className="pages">{user} Background info:</span>}
          <CreateTextArea placeholder={placeholder} value={background} handleChange={this.handleChange} />
        </form>
        {!profile && <button className="prev-btn" onClick={this.goBack}>Back</button>}
        {!profile && <button className="next-btn" onClick={this.submitForm}>Next</button>}
        {!profile && <span className="pages">4 of {user === 'Mentor' ? '7' : '5'}</span>}
      </div>
    )
  }
}

export default UserBackground;
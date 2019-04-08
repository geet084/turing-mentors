import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

export class MentorPopup extends Component {
  state = {
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value })
  }

  handleSubmit = () => {
    const message = `To user: ${this.props.slack ? this.props.slack : 'anonymous'} -- message: ${this.state.text}`
    this.setState({ text: '' })
    this.props.sendMessage(message)
  }

  render() {
    return (
      <div>
        mentor popup page
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
        <p>{this.props.cohort}</p>
        <p>{this.props.background}</p>
        <p>{this.props.tech_skills && this.props.tech_skills[0]}</p>
        <div>
          <textarea className="bg-info" name="text" placeholder="send slack message" value={this.state.text} onChange={this.handleChange}></textarea>
        </div>
        <button onClick={this.handleSubmit} >Submit</button>
        <Link to='/mentors'>GO BACK</Link>
      </div>
    )
  }
}

export default MentorPopup;
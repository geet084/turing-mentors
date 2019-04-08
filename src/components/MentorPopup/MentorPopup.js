import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MentorPopup extends Component {
  state = {
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value })
  }

  handleSubmit = () => {
    const message = `To user: anonymous -- message: ${this.state.text}`
    this.setState({ text: '' })
    this.props.sendMessage(message)
  }

  render() {
    const { name, location, cohort, program, background, tech_skills } = this.props;

    return (
      <div>
        mentor popup page
        <p>{name}</p>
        <p>{location}</p>
        <p>{cohort}{program}</p>
        <p>{background}</p>
        <p>{tech_skills && tech_skills[0]}</p>
        <div>
          <textarea
            className="bg-info"
            name="text"
            placeholder="send slack message"
            value={this.state.text}
            onChange={this.handleChange}>
          </textarea>
        </div>
        <button onClick={this.handleSubmit} >Submit</button>
        <Link to='/mentors'>GO BACK</Link>
      </div>
    )
  }
}

export default MentorPopup;
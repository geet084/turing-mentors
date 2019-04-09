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
    const message = `${this.props.contact_details.slack}: ${this.state.text}`
    this.setState({ text: '' })
    this.props.sendMessage(message)
  }

  render() {
    const { first_name, last_name, identities, location, cohort, program, current_job, contact_details, background, tech_skills, non_tech_skills } = this.props;

    return (
      <div>
        <p>
          {first_name} {last_name}
          {identities && identities.map(id => <span key={id}> {id} </span>)}
        </p>
        <p>{location}</p>
        <p>{cohort}{program}</p>
        <p>{current_job}</p>
        <p>{background}</p>
        <div>
          {contact_details && Object.keys(contact_details).map(detail => <p key={detail}>{detail}: {contact_details[detail]}</p>)}
        </div>
        <div>
          {tech_skills && Object.keys(tech_skills).map(skill => <p key={skill}>Tech skillz: {tech_skills[skill]}</p>)}
        </div>
        <div>
          {non_tech_skills && Object.keys(non_tech_skills).map(skill => <p key={skill}>NON-Tech skillz: {non_tech_skills[skill]}</p>)}
        </div>
        <p>...availabilities here...</p>
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
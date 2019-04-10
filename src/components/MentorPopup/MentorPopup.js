import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

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

  generateContactInfo = (details) => {
    return Object.keys(details).map(detail => <p key={detail}> {detail}: {details[detail]} </p>);
  }

  generateSkills = (skills) => {
    return Object.keys(skills).map(skill => <span key={skill}> {skills[skill]}, </span>);
  }

  generateAvailability = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const timeSlots = ['Morning', 'Afternoon', 'Evening'];
    return days.map((day, i) => {
      let availTimes = [];
      this.props.availability[i].forEach((times, j) => {
        if (times) availTimes.push(<span key={day + j}>{timeSlots[j]} </span>)
      })
      if (availTimes.length) {
        return (<p key={day + i}>{day}: {availTimes}</p>)
      }
    })
  }

  render() {
    const { first_name, last_name, identities, location, cohort, program, current_job, contact_details, background, tech_skills, non_tech_skills, availability } = this.props;
    const contactInfo = this.generateContactInfo(contact_details)
    const techSkills = this.generateSkills(tech_skills)
    const nonTechSkills = this.generateSkills(non_tech_skills)
    const avail = this.generateAvailability()

    return (
      <div className="mentor-popup link-content">
        <div className="name">
          <span> {first_name} {last_name} {cohort}{program} </span>
          <span>{identities && identities.map(id => <span key={id}> {id} </span>)}</span>
        </div>
        <div>
          <span>{location} </span>
          <span> {current_job}</span>
        </div>
        <Collapsible openedClassName="contact-info" trigger="+ Contact Info +">
          {contact_details && contactInfo}
        </Collapsible>
        <Collapsible trigger="+ Skills +">
          <div>
            <p>Tech Skills:</p>
            {tech_skills && techSkills}
          </div>
          <div>
            <p>Non-tech Skills:</p>
            {non_tech_skills && nonTechSkills}
          </div>
        </Collapsible>
        <Collapsible openedClassName="avail" trigger="+ Availability +">
          {availability && avail}
        </Collapsible>
        <Collapsible trigger="+ Background Info +">
          <span>{background}</span>
        </Collapsible>
        <Collapsible openedClassName="slack-message" trigger="+ Send a slack message +">
          <textarea
            className="bg-info"
            name="text"
            placeholder="send slack message"
            value={this.state.text}
            onChange={this.handleChange}>
          </textarea>
          <button onClick={this.handleSubmit}>Submit</button>
        </Collapsible>
        <Link to='/mentors'>GO BACK</Link>
      </div>
    )
  }
}

export default MentorPopup;
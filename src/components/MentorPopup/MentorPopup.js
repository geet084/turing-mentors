import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CreateTextArea } from '../CreateTextArea/CreateTextArea';
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
      const dayOfWeek = this.props.availability[i];
      let availTimes = [];
      dayOfWeek && dayOfWeek.forEach((times, j) => {
        if (times) availTimes.push(<span key={day + j}>{timeSlots[j]} </span>)
      })
      if (availTimes.length) return (<p key={day + i}>{day}: {availTimes}</p>)
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
          <span> {first_name} {last_name} </span>
          <span> {cohort}{program} </span>
          <p>{identities && identities.map(id => <span key={id}> {id} </span>)}</p>
        </div>
        <div>
          <span>{location} </span>
          <span> {current_job}</span>
        </div>
        <Collapsible openedClassName="contact-info" contentInnerClassName="contact-info" contentOuterClassName="contact-info" trigger="Contact Info  &#9660;" triggerWhenOpen="Contact Info  &#9650;">
          {contact_details && contactInfo}
        </Collapsible>
        <Collapsible trigger="Skills  &#9660;" triggerWhenOpen="Skills  &#9650;">
          <div>
            <p>Tech Skills:</p>
            {tech_skills && techSkills}
          </div>
          <div>
            <p>Non-tech Skills:</p>
            {non_tech_skills && nonTechSkills}
          </div>
        </Collapsible>
        <Collapsible openedClassName="avail" contentInnerClassName="avail" contentOuterClassName="avail" trigger="Availability  &#9660;" triggerWhenOpen="Availability  &#9650;">
          {availability && avail}
        </Collapsible>
        <Collapsible trigger="Background Info  &#9660;" triggerWhenOpen="Background Info  &#9650;">
          <p>{background}</p>
        </Collapsible>
        <Collapsible openedClassName="slack-message" contentInnerClassName="slack-message" ontentOuterClassName="slack-message" trigger="Send slack message  &#9660;" triggerWhenOpen="Send slack message  &#9650;">
          <CreateTextArea placeholder="Send a slack message" value={this.state.text} handleChange={this.handleChange} />
          <button className="slack-btn" onClick={this.handleSubmit}>Submit</button>
        </Collapsible>
        <div className="links">
          <Link to='/mentors'>GO BACK</Link>
        </div>
      </div>
    )
  }
}

export default MentorPopup;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CreateTextArea } from '../CreateTextArea/CreateTextArea';
import { ProfileSection } from '../ProfileSection/ProfileSection';

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

  generateContactInfo = () => {
    const { contact_details } = this.props;
    return Object.keys(contact_details).map(detail => <p key={detail}> {detail}: {contact_details[detail]} </p>);
  }

  generateSkillBlock() {
    const { tech_skills, non_tech_skills } = this.props;
    return (<>
      <div>
        <p>Tech Skills:</p>
        {Object.keys(tech_skills).map(skill => <span key={skill}> {tech_skills[skill]}, </span>)}
      </div>
      <div>
        <p>Non-tech Skills:</p>
        {Object.keys(non_tech_skills).map(skill => <span key={skill}> {non_tech_skills[skill]}, </span>)}
      </div>
    </>);
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

  generateSlackBlock() {
    return <CreateTextArea placeholder="Send a slack message" value={this.state.text} handleChange={this.handleChange} />;
  }

  render() {
    const { first_name, last_name, identities, location, cohort, program, current_job, background } = this.props;
    const contactInfo = this.generateContactInfo()
    const availability = this.generateAvailability()
    const slackMsg = this.generateSlackBlock();
    const skillBlock = this.generateSkillBlock()

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
        <ProfileSection name="Contact Info" content={contactInfo} classes="contact-info" />
        <ProfileSection name="Skills" content={skillBlock} />
        <ProfileSection name="Availability" content={availability} classes="avail" />
        <ProfileSection name="Background Info" content={background} />
        <ProfileSection name="Send a slack message" content={slackMsg} classes="slack-message" />
        <div className="links">
          <Link to='/mentors'>GO BACK</Link>
        </div>
      </div>
    )
  }
}

export default MentorPopup;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MentorPopup extends Component {
  render() {
    return (
      <div>
        mentor popup page
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
        <p>{this.props.cohort}</p>
        <p>{this.props.background}</p>
        <p>{this.props.tech_skills && this.props.tech_skills[0]}</p>
        <Link to='/mentors'>GO BACK</Link>
      </div>
    )
  }
}

export default MentorPopup;
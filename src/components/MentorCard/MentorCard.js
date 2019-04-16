import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MentorCard extends Component {
  render() {
    const { id, first_name, last_name, location, tech_skills } = this.props;
    let skills = tech_skills.includes('javascript') ? 'JS' : ''
    skills += tech_skills.includes('ruby') ? 'Ruby' : '';
    if (skills === 'JSRuby') skills = 'JS & Ruby'

    return (
      <Link to={`/mentors/${id}`} className="mentor-card-link">
        <div className="mentors-card">
          <p>{first_name} {last_name}</p>
          <div className="loc-lang">
            <span className="loc">
              {location}
            </span>
            <span className="lang">
              {skills}
              {!skills && tech_skills[0]}
            </span>
          </div>
        </div>
      </Link>
    )
  }
}

export default MentorCard;
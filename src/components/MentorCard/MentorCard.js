import React, { Component } from 'react';

export class MentorCard extends Component {
  render() {
    const { name, location, tech_skills } = this.props;
    return (
      <div className="mentors-card">
        <p>{name}</p>
        <div className="loc-lang">
          <span className="loc">
            {location}
          </span>
          {
            tech_skills &&
            <span className="lang">
              {tech_skills[0]}
            </span>
          }
        </div>
      </div>
    )
  }
}

export default MentorCard;
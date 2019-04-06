import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MentorCard extends Component {
  render() {
    const { id, name, location, tech_skills } = this.props;
    return (
      <Link to={`/mentors/${id}`}>
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
      </Link>
    )
  }
}

export default MentorCard;
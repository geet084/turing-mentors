import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBio from '../../components/UserBio/UserBio';

export class Profile extends Component {

  render() {
    const { first_name, last_name, identities, location, cohort, program, current_job, slack, email, phone, contact_details, background, tech_skills, non_tech_skills, availability } = this.props.user;

    return (
      <div>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="User Info  &#9660;" triggerWhenOpen=" &#9650;">
          <UserInfo first_name={first_name} last_name={last_name} identities={identities} cohort={cohort} program={program} current_job={current_job} />
        </Collapsible>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(Profile);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBio from '../../components/UserBio/UserBio';
import UserBackground from '../../components/UserBackground/UserBackground';
import UserSchedule from '../../components/UserSchedule/UserSchedule';

export class Profile extends Component {

  render() {
    const { first_name, last_name, identities, location, cohort, program, current_job, slack, email, phone, contact_details, background, tech_skills, non_tech_skills, availability } = this.props.user;

    return (
      <div>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="User Info  &#9660;" triggerWhenOpen=" &#9650;">
          <UserInfo first_name={first_name} last_name={last_name} identities={identities} cohort={cohort} program={program} current_job={current_job} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Contact Info  &#9660;" triggerWhenOpen=" &#9650;">
          <UserBio slack={slack} email={email} phone={phone} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Background Info  &#9660;" triggerWhenOpen=" &#9650;">
          <UserBackground background={background} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Availability Info  &#9660;" triggerWhenOpen=" &#9650;">
          <UserSchedule
            day0={availability[0]}
            day1={availability[1]}
            day2={availability[2]}
            day3={availability[3]}
            day4={availability[4]}
            day5={availability[5]}
            day6={availability[6]}
          />
        </Collapsible>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(Profile);
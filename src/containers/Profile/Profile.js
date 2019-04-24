import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBio from '../../components/UserBio/UserBio';
import UserBackground from '../../components/UserBackground/UserBackground';
import UserSchedule from '../../components/UserSchedule/UserSchedule';
import UserTechSkills from '../../components/UserTechSkills/UserTechSkills';
import UserNonTechSkills from '../../components/UserNonTechSkills/UserNonTechSkills';

export class Profile extends Component {

  render() {
    const { first_name, last_name, identities, location, cohort, program, current_job, slack, email, phone, background, tech_skills, non_tech_skills, availability } = this.props.user;

    return (
      <div>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="User Info  &#9660;" triggerWhenOpen=" &#9650;">
          <UserInfo first_name={first_name} last_name={last_name} identities={identities} cohort={cohort} program={program} current_job={current_job} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Contact Info  &#9660;" triggerWhenOpen=" &#9650;">
          <UserBio slack={slack} email={email} phone={phone} location={location} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Background Info  &#9660;" triggerWhenOpen=" &#9650;">
          <UserBackground background={background} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Availability Info  &#9660;" triggerWhenOpen=" &#9650;">
          <UserSchedule availability={availability} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Tech Skills  &#9660;" triggerWhenOpen=" &#9650;">
          <UserTechSkills tech_skills={tech_skills} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Non-Tech Skills  &#9660;" triggerWhenOpen=" &#9650;">
          <UserNonTechSkills non_tech_skills={non_tech_skills} />
        </Collapsible>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(Profile);
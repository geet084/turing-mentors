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
    const { first_name, last_name, identities, location, cohort, program, current_job, slack, email, phone, linkedin, preferred_method, background, tech_skills, non_tech_skills, availability } = this.props.user;

    return (
      <div>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="User Info  &#9660;" triggerWhenOpen="User Info  &#9650;">
          <UserInfo profile={true} first_name={first_name} last_name={last_name} identities={identities} cohort={cohort} program={program} current_job={current_job} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Contact Info  &#9660;" triggerWhenOpen="Contact Info  &#9650;">
          <UserBio profile={true} slack={slack} email={email} phone={phone} linkedin={linkedin} preferred_method={preferred_method} location={location} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Background Info  &#9660;" triggerWhenOpen="Background Info  &#9650;">
          <UserBackground profile={true} background={background} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Availability Info  &#9660;" triggerWhenOpen="Availability Info  &#9650;">
          <UserSchedule profile={true} availability={availability} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Tech Skills  &#9660;" triggerWhenOpen="Tech Skills  &#9650;">
          <UserTechSkills profile={true} tech_skills={tech_skills} />
        </Collapsible>
        <Collapsible openedClassName="profile" contentInnerClassName="profile" contentOuterClassName="profile" trigger="Non-Tech Skills  &#9660;" triggerWhenOpen="Non-Tech Skills  &#9650;">
          <UserNonTechSkills profile={true} non_tech_skills={non_tech_skills} />
        </Collapsible>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(Profile);
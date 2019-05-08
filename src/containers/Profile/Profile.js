import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserBio from '../../components/UserBio/UserBio';
import UserBackground from '../../components/UserBackground/UserBackground';
import UserSchedule from '../../components/UserSchedule/UserSchedule';
import UserTechSkills from '../../components/UserTechSkills/UserTechSkills';
import UserNonTechSkills from '../../components/UserNonTechSkills/UserNonTechSkills';
import ProfileSection from '../../components/ProfileSection/ProfileSection';

export class Profile extends Component {

  render() {
    const { first_name, last_name, identities, location, cohort, program, current_job, slack, email, phone, linkedin, preferred_method, background, tech_skills, non_tech_skills, availability } = this.props.user;
    const userInfo = <UserInfo profile={true} first_name={first_name} last_name={last_name} identities={identities} cohort={cohort} program={program} current_job={current_job} />;
    const userBio = <UserBio profile={true} slack={slack} email={email} phone={phone} linkedin={linkedin} preferred_method={preferred_method} location={location} />;
    const userBackground = <UserBackground profile={true} background={background} />;
    const userSchedule = <UserSchedule profile={true} availability={availability} />;
    const userTechSkills = <UserTechSkills profile={true} tech_skills={tech_skills} />;
    const userNonTechSkills = <UserNonTechSkills profile={true} non_tech_skills={non_tech_skills} />;
    
    return (
      <div className="link-content">
        <ProfileSection name="User Info" content={userInfo} />
        <ProfileSection name="Contact Info" content={userBio} />
        <ProfileSection name="Background Info" content={userBackground} />
        <ProfileSection name="Availability Info" content={userSchedule} />
        <ProfileSection name="TechSkills" content={userTechSkills} />
        <ProfileSection name="Non-TechSkills" content={userNonTechSkills} />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(Profile);
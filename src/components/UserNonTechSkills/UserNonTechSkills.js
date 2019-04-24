import React, { Component } from 'react';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserNonTechSkills extends Component {
  constructor(props) {
    super(props)
    const { non_tech_skills } = this.props

    this.state = {
      non_tech_skills: non_tech_skills || [],
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'complete']);
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userTechSkills']);
  }

  checkBoxes = ({ target }) => {
    let skills = [...this.state.non_tech_skills]
    let updatedState;

    if (skills.includes(target.value)) updatedState = skills.filter(skill => skill !== target.value)
    else updatedState = [...skills, target.value]

    this.setState({ non_tech_skills: updatedState })
  }

  render() {
    const { profile, user } = this.props;
    const non_tech_skills = ['stress_management', 'public_speaking', 'resumes', 'technical_interviews', 'parenting', 'wellness'];
    const checkBoxes = non_tech_skills.map((skill, index) => {
      return <CreateCheckbox key={skill} field={skill} name={skill} value={index + 1} checkBoxes={this.checkBoxes} checked={this.state.non_tech_skills.includes(index.toString()) ? true : false} />
    });

    return (
      <div className="form-page">
        {!profile && <p className="pages">Mentor NON Tech skills</p>}
        <form>
          {checkBoxes}
        </form>
        {!profile && <button className="next-btn" onClick={this.goBack}>Back</button>}
        {!profile && <button className="next-btn" onClick={this.submitForm}>Submit</button>}
        {!profile && <span className="pages">6 of {user === 'Mentor' ? '6' : '4'}</span>}
      </div>
    )
  }
}

export default UserNonTechSkills;
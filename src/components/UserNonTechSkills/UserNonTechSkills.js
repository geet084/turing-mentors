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
    const mentor = this.props.user === 'Mentor';
    const non_tech_skills = ['stress_management', 'public_speaking', 'resumes', 'technical_interviews', 'parenting', 'wellness']
    const checkBoxes = non_tech_skills.map((skill, index) => {
      return <CreateCheckbox key={skill} field={skill} name={skill} value={index + 1} checkBoxes={this.checkBoxes} checked={this.state.non_tech_skills.includes(index.toString()) ? true : false} />
    })

    return (
      <div className="form-page">
        <p className="pages">Mentor NON Tech skills</p>
        <form>
          {checkBoxes}
        </form>
        <button className="next-btn" onClick={this.goBack}>Back</button>
        <button className="next-btn" onClick={this.submitForm}>Submit</button>
        <span className="pages">6 of {mentor ? '6' : '4'}</span>
      </div>
    )
  }
}

export default UserNonTechSkills;
import React, { Component } from 'react';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserTechSkills extends Component {
  constructor(props) {
    super(props)
    const { tech_skills } = this.props

    this.state = {
      tech_skills: tech_skills || [],
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userNonTechSkills']);
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userSchedule']);
  }

  checkBoxes = ({ target }) => {
    let skills = [...this.state.tech_skills]
    let updatedState;

    if (skills.includes(target.value)) updatedState = skills.filter(skill => skill !== target.value)
    else updatedState = [...skills, target.value]

    this.setState({ tech_skills: updatedState })
  }

  render() {
    const mentor = this.props.user === 'Mentor';
    const tech_skills = ['ruby', 'javascript', 'python', 'java', 'elixer', 'c', 'php', 'swift', 'sql']
    const checkBoxes = tech_skills.map((skill, index) => {
      return <CreateCheckbox key={skill} field={skill} name={skill} value={index + 1} checkBoxes={this.checkBoxes} checked={this.state.tech_skills.includes(index.toString()) ? true : false} />
    })

    return (
      <div className="form-page">
        <p className="pages">Mentor Tech skills</p>
        <form>
          {checkBoxes}
        </form>
        <button className="next-btn" onClick={this.goBack}>Back</button>
        <button className="next-btn" onClick={this.submitForm}>Next</button>
        <span className="pages">5 of {mentor ? '6' : '4'}</span>
      </div>
    )
  }
}

export default UserTechSkills;
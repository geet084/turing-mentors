import React, { Component } from 'react';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserNonTechSkills extends Component {
  state = {
    nonTechSkills: {
      StressManagement: false,
      PublicSpeaking: false,
      Resumes: false,
      Technical_Interview: false,
      Parenting: false,
      Wellness: false,
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
    let nonTechSkills = { ...this.state.nonTechSkills };
    nonTechSkills[target.name] = !nonTechSkills[target.name]

    this.setState({ nonTechSkills })
  }

  render() {
    const mentor = this.props.user === 'Mentor';
    const { nonTechSkills } = this.state;
    const checkBoxes = Object.keys(nonTechSkills).map((skill, index) => {
      return <CreateCheckbox key={skill} field={skill} name={skill} value={index} checkBoxes={this.checkBoxes} />
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
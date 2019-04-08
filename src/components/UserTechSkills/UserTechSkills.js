import React, { Component } from 'react';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserTechSkills extends Component {
  state = {
    techSkills: {
      Ruby: false,
      JavaScript: false,
      Python: false,
      Java: false,
      Elixer: false,
      C: false,
      PHP: false,
      Swift: false,
      SQL: false,
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
    let techSkills = { ...this.state.techSkills };
    techSkills[target.name] = !techSkills[target.name]

    this.setState({ techSkills })
  }

  render() {
    const mentor = this.props.user === 'Mentor';
    const { techSkills } = this.state;
    const checkBoxes = Object.keys(techSkills).map((skill, index) => {
      return <CreateCheckbox key={skill} field={skill} name={skill} value={index} checkBoxes={this.checkBoxes} />
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
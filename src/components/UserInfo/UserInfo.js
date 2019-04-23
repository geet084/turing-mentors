import React, { Component } from 'react';
import { CreateInput } from '../CreateInput/CreateInput';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserInfo extends Component {
  state = {
    first_name: '',
    last_name: '',
    identities: [],
    cohort: 0,
    program: '',
    current_job: '',
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userBio']);
  }

  updateIdentity = ({ target }) => {
    const state = this.state[target.name];
    const value = parseInt(target.value);
    let updatedState;

    if (state.includes(value)) updatedState = state.filter(prop => prop !== value)
    else updatedState = [...state, value]

    this.setState({ [target.name]: updatedState.sort() })
  }

  updateProgram = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  updateCohort = ({ target }) => {
    this.setState({ [target.name]: parseInt(target.value) })
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { first_name, last_name, cohort, current_job } = this.state;
    const mentor = this.props.user === 'Mentor';
    const identities = ['Male', 'Female', 'Non-Binary'].map((identity, i) => (
      <CreateCheckbox key={i} field="identities" name={identity} value={i + 1} checkBoxes={this.updateIdentity} />
    ))
    
    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          <span className="pages">{this.props.user} User info:</span>
          <CreateInput field="first_name" text="First Name" value={first_name} handleChange={this.handleChange} max="28" />
          <CreateInput field="last_name" text="Last Name" value={last_name} handleChange={this.handleChange} max="28" />
          <div className="check-box">
            {identities}
          </div>
          <div>
            <CreateInput field="cohort" text="Cohort (ex: 1406)" value={cohort} handleChange={this.updateCohort} max='4' />
            <CreateCheckbox className="aa" field="program" name={'BE'} value={'BE'} checkBoxes={this.updateProgram} />
            <CreateCheckbox field="program" name={'FE'} value={'FE'} checkBoxes={this.updateProgram} />
          </div>
        </form>
        <div className="input-box">
          {
            mentor &&
            <CreateInput field="current_job" text="Current Job" value={current_job} handleChange={this.handleChange} max="28" />
          }
          <button className="next-btn" onClick={this.submitForm}>Next</button>
          <span className="pages">1 of {mentor ? '6' : '4'}</span>
        </div>
      </div>
    )
  }
}

export default UserInfo;
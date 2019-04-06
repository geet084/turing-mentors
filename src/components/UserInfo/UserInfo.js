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
    const { name, value } = target;

    if(value)
    
    this.setState({ [name]: value })
  }

  updateCohort = ({ target }) => {
    this.setState({ [target.name]: parseInt(target.value) })
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { firstName, lastName, cohort, current_job } = this.state;
    const identities = ['Male', 'Female', 'Non-Binary'];

    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          <span className="pages"> User info:</span>
          <CreateInput field="firstName" text="First Name" value={firstName} handleChange={this.handleChange} max="28" />
          <CreateInput field="lastName" text="Last Name" value={lastName} handleChange={this.handleChange} max="28" />

          <div className="check-box">
            {
              identities.map((identity, i) => (
                <CreateCheckbox key={i} field="identities" name={identity} value={i} checkBoxes={this.updateIdentity} />
              ))
            }
          </div>
          <div>
            <CreateInput field="cohort" text="Cohort (ex: 1406)" value={cohort} handleChange={this.updateCohort} max='4' />
            <CreateCheckbox field="program" name={'BE'} value={'BE'} checkBoxes={this.updateProgram} />
            <CreateCheckbox field="program" name={'FE'} value={'FE'} checkBoxes={this.updateProgram} />
          </div>
        </form>
        <div className="input-box">
          <CreateInput field="current_job" text="Current Job" value={current_job} handleChange={this.handleChange} max="28" />
          <button className="next-btn" onClick={this.submitForm}>Next</button>
          <span className="pages">1 of 4</span>
        </div>
      </div>
    )
  }
}

export default UserInfo;
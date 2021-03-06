import React, { Component } from 'react';
import { CreateNumberInput } from '../CreateNumberInput/CreateNumberInput';
import { CreateTextInput } from '../CreateTextInput/CreateTextInput';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserInfo extends Component {
  constructor(props) {
    super(props)
    const { first_name, last_name, identities, cohort, program, current_job } = this.props

    this.state = {
      first_name: first_name || '',
      last_name: last_name || '',
      identities: identities || [],
      cohort: cohort || '',
      program: program || '',
      current_job: current_job || '',
    }
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
    let userInput;
    if (!isNaN(parseInt(target.value))) userInput = parseInt(target.value)
    else userInput = ''

    this.setState({ [target.name]: userInput })
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { first_name, last_name, identities, cohort, program, current_job } = this.state;
    const { profile, user } = this.props;
    const identityBoxes = ['Male', 'Female', 'Non-Binary'].map((identity, i) => (
      <CreateCheckbox key={i} field="identities" name={identity} value={i + 1} checkBoxes={this.updateIdentity} checked={identities.includes(i + 1) ? true : false} />
    ));

    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          {!profile && <span className="pages">{this.props.user} User info:</span>}
          <CreateTextInput text="First Name" value={first_name} handleChange={this.handleChange} />
          <CreateTextInput text="Last Name" value={last_name} handleChange={this.handleChange} />
          <div className="check-box">
            {identityBoxes}
          </div>
          <div>
            <CreateNumberInput text="Cohort (ex: 1406)" value={cohort} handleChange={this.updateCohort} max='4' />
            <CreateCheckbox className="aa" field="program" name={'BE'} value={'BE'} checkBoxes={this.updateProgram} checked={program === 'BE' ? true : false} />
            <CreateCheckbox field="program" name={'FE'} value={'FE'} checkBoxes={this.updateProgram} checked={program === 'FE' ? true : false} />
          </div>
        </form>
        <div className="input-box">
          {
            user === 'Mentor' &&
            <CreateTextInput text="Current Job" value={current_job} handleChange={this.handleChange} />
          }
          {!profile && <button className="next-btn" onClick={this.submitForm}>Next</button>}
          {!profile && <span className="pages">1 of {user === 'Mentor' ? '6' : '4'}</span>}
        </div>
      </div>
    )
  }
}

export default UserInfo;
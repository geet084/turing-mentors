import React, { Component } from 'react';
import { CreateInput } from '../CreateInput/CreateInput';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserInfo extends Component {
  state = {
    firstName: '',
    lastName: '',
    identities: [],
    cohort: '',
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userBio']);
  }

  checkBoxes = ({ target }) => {
    const state = this.state[target.name];
    const value = parseInt(target.value);
    let updatedState;

    if (state.includes(value)) updatedState = state.filter(prop => prop !== value)
    else updatedState = [...state, value]

    this.setState({ [target.name]: updatedState.sort() })
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { firstName, lastName, cohort } = this.state;
    const identities = ['Male', 'Female', 'Non-Binary'];

    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          <CreateInput field="firstName" text="First Name" value={firstName} handleChange={this.handleChange}  max="28" />
          <CreateInput field="lastName" text="Last Name" value={lastName} handleChange={this.handleChange} max="28" />

          <div className="input-box">
            Identities:
            {
              identities.map((identity, i) => (
                <CreateCheckbox key={i} field="identities" name={identity} value={i} checkBoxes={this.checkBoxes} />
              ))
            }
          </div>

          <CreateInput field="cohort" text="Cohort (ex: 1406FE)" value={cohort} handleChange={this.handleChange} max='6' />
        </form>
        <div className="input-box">
          <button onClick={this.submitForm}>Next</button>
          <p>1 of 3</p>
        </div>
      </div>
    )
  }
}

export default UserInfo;
import React, { Component } from 'react';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserInterests extends Component {
  constructor(props) {
    super(props)
    const { interests } = this.props

    this.state = {
      interests: interests || [],
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userBackground']);
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userBio']);
  }

  checkBoxes = ({ target }) => {
    let interests = [...this.state.interests]
    let updatedState;

    if (interests.includes(target.value)) updatedState = interests.filter(skill => skill !== target.value)
    else updatedState = [...interests, target.value]

    this.setState({ interests: updatedState })
  }

  render() {
    const { profile, user } = this.props;
    const interests = ['Board Games', 'Cycling', 'Hiking', 'Movies / TV Shows', 'Music / Podcast', 'Reading', 'Sports', 'Traveling', 'Working Out', 'Yoga'];

    const checkBoxes = interests.map((interest, index) => {
      return <CreateCheckbox key={interest} field={interest} name={interest} value={index + 1} checkBoxes={this.checkBoxes} checked={this.state.interests.includes((index + 1).toString()) ? true : false} />
    })

    return (
      <div className="form-page">
        <form>
          {checkBoxes}
        </form>
        {!profile && <button className="next-btn" onClick={this.goBack}>Back</button>}
        {!profile && <button className="next-btn" onClick={this.submitForm}>Next</button>}
        {!profile && <span className="pages">3 of {user === 'Mentor' ? '7' : '5'}</span>}
      </div>
    )
  }
}

export default UserInterests;
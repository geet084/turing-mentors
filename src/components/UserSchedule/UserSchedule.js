import React, { Component } from 'react';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserSchedule extends Component {
  constructor(props) {
    super(props)
    const { availability } = this.props

    this.state = {
      availability: availability || {
        0: [false, false, false],
        1: [false, false, false],
        2: [false, false, false],
        3: [false, false, false],
        4: [false, false, false],
        5: [false, false, false],
        6: [false, false, false],
      }
    }
  }

  submitForm = (e) => {
    e.preventDefault();

    if (this.props.user === 'Mentee') {
      this.props.updateUserInfo([{ availability: this.getUserSelections() }, 'complete']);
    } else {
      this.props.updateUserInfo([{ availability: this.getUserSelections() }, 'userTechSkills']);
    }
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([{ availability: this.getUserSelections() }, 'userBackground']);
  }

  getUserSelections() {
    const availability = { ...this.state.availability };
    for (let i = 0; i < 7; i++) {
      if (!availability[i].includes(true))
        delete availability[i];
    }
    return availability;
  }

  checkBoxes = ({ target }) => {
    let incomingClick = target.value.split('')
    let timeBlock = parseInt(incomingClick.pop())
    let weekDay = parseInt(incomingClick.pop())
    let stateToUpdate = this.state.availability[weekDay].map((avail, i) => {
      if (i === timeBlock) return !avail
      else return avail
    })
    const updatedState = this.state.availability;
    updatedState[weekDay] = stateToUpdate

    this.setState({ availability: updatedState })
  }

  render() {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const apptTimes = ['Morning', 'Afternoon', 'Evening'];

    const checkBoxes = daysOfWeek.map((day, dayIndex) => {
      return (
        <div className="schedule" key={day}>
          <span className="pages">{`${day}`}</span>
          <span>

            {
              apptTimes.map((time, timeIndex) => {
                return <CreateCheckbox key={time} field={`time${day}`} name={time} value={'' + dayIndex + timeIndex} checkBoxes={this.checkBoxes} checked={this.state.availability[dayIndex][timeIndex] ? true : false} />
              })
            }
          </span>
        </div>
      )
    })
    const { profile, user } = this.props;

    return (
      <div className="form-page">
        <form className="schedule-form" onSubmit={this.submitForm} autoComplete='off'>
          {!profile && <span className="pages">{user} Availability info:</span>}
          {checkBoxes}
        </form>
        {!profile && <button className="next-btn" onClick={this.goBack}>Back</button>}
        {!profile && <button className="next-btn" onClick={this.submitForm}>{user === 'Mentor' ? 'Next' : 'Submit'}</button>}
        {!profile && <span className="pages">4 of {user === 'Mentor' ? '6' : '4'}</span>}
      </div>
    )
  }
}

export default UserSchedule;
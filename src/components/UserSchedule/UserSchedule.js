import React, { Component } from 'react';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserSchedule extends Component {
  constructor(props) {
    super(props)
    const { day0, day1, day2, day3, day4, day5, day6 } = this.props
    
    this.state = {
      availability: {
        0: day0 || [false, false, false],
        1: day1 || [false, false, false],
        2: day2 || [false, false, false],
        3: day3 || [false, false, false],
        4: day4 || [false, false, false],
        5: day5 || [false, false, false],
        6: day6 || [false, false, false],
      }
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    if (this.props.user === 'Mentee') {
      this.props.updateUserInfo([this.state, 'complete']);
    } else {
      this.props.updateUserInfo([this.state, 'userTechSkills']);
    }
  }

  goBack = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'userBackground']);
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
    const mentor = this.props.user === 'Mentor'

    return (
      <div className="form-page">
        <form className="schedule-form" onSubmit={this.submitForm} autoComplete='off'>
          <span className="pages">{this.props.user} Availability info:</span>
          {checkBoxes}
        </form>
        <button className="next-btn" onClick={this.goBack}>Back</button>
        <button className="next-btn" onClick={this.submitForm}>{mentor ? 'Next' : 'Submit'}</button>
        <span className="pages">4 of {mentor ? '6' : '4'}</span>
      </div>
    )
  }
}

export default UserSchedule;
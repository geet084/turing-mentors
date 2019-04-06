import React, { Component } from 'react';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserSchedule extends Component {
  state = {
    availability: {
      0: [false, false, false],
      1: [false, false, false],
      2: [false, false, false],
      3: [false, false, false],
      4: [false, false, false],
      5: [false, false, false],
      6: [false, false, false],
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'complete']);
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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  time = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const apptTimes = ['Morning', 'Afternoon', 'Evening'];

    const checkBoxes = daysOfWeek.map((day, dayIndex) => {
      return (
        <div className="schedule" key={day}>
          <p className="pages">{`${day}`}</p>
          {
            apptTimes.map((time, timeIndex) => {
              return <CreateCheckbox key={time} field={`time${day}`} name={time} value={'' + dayIndex + timeIndex} checkBoxes={this.checkBoxes} />
            })
          }
        </div>
      )
    })

    return (
      <div className="form-page">
        <form className="schedule-form" onSubmit={this.submitForm} autoComplete='off'>
          <span className="pages"> Availability info:</span>
          {checkBoxes}
        </form>
        <button className="next-btn" onClick={this.goBack}>Back</button>
        <button className="next-btn" onClick={this.submitForm}>Submit</button>
        <span className="pages">4 of 4</span>
      </div>
    )
  }
}

export default UserSchedule;
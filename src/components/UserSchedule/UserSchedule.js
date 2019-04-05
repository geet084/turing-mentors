import React, { Component } from 'react';
import { CreateCheckbox } from '../CreateCheckbox/CreateCheckbox';

export class UserSchedule extends Component {
  state = {
    timeMon: [],
    timeTue: [],
    timeWed: [],
    timeThu: [],
    timeFri: [],
    timeSat: [],
    timeSun: [],
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'complete']);
  }

  checkBoxes = ({ target }) => {
    let incomingClick = target.value.split('')
    let updatedState = [...this.state[target.name]];
    let newValue = parseInt(incomingClick.pop())
    
    if (!updatedState.includes(newValue)) {
      updatedState.push(newValue)
    } else {
      let index = updatedState.indexOf(newValue)
      updatedState.splice(index, 1)
    }

    this.setState({ [target.name]: updatedState.sort() })
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  time = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const apptTimes = ['Morning', 'Lunch', 'Afternoon', 'Evening'];

    const checkBoxes = daysOfWeek.map((day, dayIndex) => {
      return (
        <div className="schedule" key={day}>
          <CreateCheckbox key={day} field={`time${day}`} name={day} value={dayIndex} checkBoxes={this.checkBoxes} />
          {
            apptTimes.map((time, timeIndex) => {
              return <CreateCheckbox key={time} field={`time${day}`} name={time} value={'' + dayIndex + (timeIndex + 1)} checkBoxes={this.checkBoxes} />
            })
          }
        </div>
      )
    })

    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>
          <span className="pages"> Availability info:</span>
          {checkBoxes}
        </form>
        <button className="next-btn" onClick={this.submitForm}>Next</button>
        <span className="pages">4 of 4</span>
      </div>
    )
  }
}

export default UserSchedule;
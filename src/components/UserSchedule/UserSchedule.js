import React, { Component } from 'react';

export class UserSchedule extends Component {
  state = {
    availability: [],
    monTime: '',
    tueTime: '',
    wedTime: '',
    thuTime: '',
    friTime: '',
    satTime: '',
    sunTime: '',
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.updateUserInfo([this.state, 'complete']);
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

  time = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm} autoComplete='off'>

          <label> Availabilty:
          <br />
            <div>
              <label> Mon
            <input type="checkbox" name='availability' value={0} onChange={this.checkBoxes} /></label>
              <select name="monTime" value={this.state.monTime} onChange={this.time}>
                <option value="def">select</option>
                <option value="800">8:00</option>
                <option value="830">8:30</option>
                <option value="900">9:00</option>
                <option value="930">9:30</option>
                <option value="1000">10:00</option>
              </select>
            </div>
            <br />
            <div>

              <label> Tue<input type="checkbox" name='availability' value={1} onChange={this.checkBoxes} /></label>
              <select name="tueTime" value={this.state.tueTime} onChange={this.time}>
                <option value="def">select</option>
                <option value="800">8:00</option>
                <option value="830">8:30</option>
                <option value="900">9:00</option>
                <option value="930">9:30</option>
                <option value="1000">10:00</option>
              </select>
            </div>
            <br />
            <div>
              <label> Wed<input type="checkbox" name='availability' value={2} onChange={this.checkBoxes} /></label>
              <select name="wedTime" value={this.state.wedTime} onChange={this.time}>
                <option value="def">select</option>
                <option value="800">8:00</option>
                <option value="830">8:30</option>
                <option value="900">9:00</option>
                <option value="930">9:30</option>
                <option value="1000">10:00</option>
              </select>
            </div>
            <br />
            <div>
              <label> Thu<input type="checkbox" name='availability' value={3} onChange={this.checkBoxes} /></label>
              <select name="thuTime" value={this.state.thuTime} onChange={this.time}>
                <option value="def">select</option>
                <option value="800">8:00</option>
                <option value="830">8:30</option>
                <option value="900">9:00</option>
                <option value="930">9:30</option>
                <option value="1000">10:00</option>
              </select>
            </div>
            <br />
            <div>
              <label> Fri<input type="checkbox" name='availability' value={4} onChange={this.checkBoxes} /></label>
              <select name="friTime" value={this.state.friTime} onChange={this.time}>
                <option value="def">select</option>
                <option value="800">8:00</option>
                <option value="830">8:30</option>
                <option value="900">9:00</option>
                <option value="930">9:30</option>
                <option value="1000">10:00</option>
              </select>
            </div>
            <br />
            <div>
              <label> Sat<input type="checkbox" name='availability' value={5} onChange={this.checkBoxes} /></label>
              <select name="satTime" value={this.state.satTime} onChange={this.time}>
                <option value="def">select</option>
                <option value="800">8:00</option>
                <option value="830">8:30</option>
                <option value="900">9:00</option>
                <option value="930">9:30</option>
                <option value="1000">10:00</option>
              </select>
            </div>
            <br />
            <div>
              <label> Sun<input type="checkbox" name='availability' value={6} onChange={this.checkBoxes} /></label>
              <select name="sunTime" value={this.state.sunTime} onChange={this.time}>
                <option value="def">select</option>
                <option value="800">8:00</option>
                <option value="830">8:30</option>
                <option value="900">9:00</option>
                <option value="930">9:30</option>
                <option value="1000">10:00</option>
              </select>
            </div>
          </label>
        </form>
        <button onClick={this.submitForm}>Next</button>
        <p>3 of 3</p>
      </div>
    )
  }
}

export default UserSchedule;
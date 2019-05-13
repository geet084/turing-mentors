import React, { Component } from 'react';

export class SelectState extends Component {
  state = {
    size: 0
  }

  limitMenuSize = () => {
    this.setState({ size: 4 })
  }
  
  handleChange = (e) => {
    this.setState({ size: 0 })
    this.props.handleChange(e)
  }

  render() {
    const { size } = this.state;
    const value = this.props.value === '' ? "top" : this.props.value
    const stateList = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

    return (
      <div>
        <select name="state" size={size} onChange={this.handleChange} value={value} onMouseDown={this.limitMenuSize} onBlur={this.handleChange}>
          <option value="top" disabled={true} >State: </option>
          {stateList.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
      </div>
    )
  }
}

export default SelectState;
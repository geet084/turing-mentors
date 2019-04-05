import React, { Component } from 'react';

export class CreateCheckbox extends Component {

  render() {
    return (
      <div className="checkboxes">
        <input
          type="checkbox"
          id={this.props.value}
          name={this.props.field}
          value={this.props.value}
          onChange={this.props.checkBoxes}
        />
        <label htmlFor={this.props.value}>{this.props.name}</label>
      </div>
    )
  }
}

export default CreateCheckbox;
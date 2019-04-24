import React, { Component } from 'react';

export class CreateCheckbox extends Component {
  render() {
    const {checked, checkBoxes, field, name, value} = this.props;
    
    return (
      <div className="checkboxes">
        <input
          checked={checked}
          type="checkbox"
          id={value}
          name={field}
          value={value}
          onChange={checkBoxes}
        />
        <label htmlFor={value}>{name}</label>
      </div>
    )
  }
}

export default CreateCheckbox;
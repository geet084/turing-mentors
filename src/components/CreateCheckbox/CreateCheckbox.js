import React, { Component } from 'react';

export class CreateCheckbox extends Component {

  render() {
    return (
      <div>
        <label>
          {this.props.name}
          <input
            type="checkbox"
            name={this.props.field}
            value={this.props.value}
            onChange={this.props.checkBoxes}
          />
        </label>
      </div>
    )
  }
}

export default CreateCheckbox;
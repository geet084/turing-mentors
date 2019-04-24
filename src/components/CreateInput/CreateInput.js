import React, { Component } from 'react';

export class CreateInput extends Component {

  render() {
    const { handleChange, field, max, text, value } = this.props;

    return (
      <div className="input-box">
        <input
          className={value ? 'input-effect has-content' : 'input-effect'}
          type="text"
          value={value}
          maxLength={max}
          name={field}
          onChange={handleChange}
        />
        <label>{text}</label>
        <span className="focus-border"></span>
      </div>
    )
  }
}

export default CreateInput;
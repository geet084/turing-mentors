import React, { Component } from 'react';

export class CreateInput extends Component {

  render() {
    const classes = this.props.value ? 'input-effect has-content' : 'input-effect';

    return (
      <div className="input-box">
        <input
          className={classes}
          type="text"
          placeholder=""
          maxLength={this.props.max}
          name={this.props.field}
          onChange={this.props.handleChange}
        />
        <label>{this.props.text}</label>
        <span className="focus-border"></span>
      </div>
    )
  }
}

export default CreateInput;
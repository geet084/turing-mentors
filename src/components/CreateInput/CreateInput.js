import React, { Component } from 'react';

export class CreateInput extends Component {

  adjust = ({ target }) => {
    if (this.props.value) {
      target.classList.add('has-content')
    } else {
      target.classList.remove('has-content')
    }
  }

  render() {
    return (
      <div className="input-box">
        <input
          className="input-effect"
          type="text"
          placeholder=""
          maxLength={this.props.max}
          name={this.props.field}
          onChange={this.props.handleChange}
          onBlur={this.adjust}
        />
        <label>{this.props.text}</label>
        <span className="focus-border"></span>
      </div>
    )
  }
}

export default CreateInput;
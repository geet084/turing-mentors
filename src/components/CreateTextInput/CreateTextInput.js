import React from 'react';

export const CreateTextInput = (props) => {
  const { handleChange, text, value } = props;
  const name = text.toLowerCase().split(' ').join('_')
  
  return (
    <div className="input-box">
      <input
        className={value ? 'input-effect has-content' : 'input-effect'}
        maxLength='28'
        name={name}
        onChange={handleChange}
        type="text"
        value={value}
      />
      <label>{text}</label>
      <span className="focus-border"></span>
    </div>
  )
}

export default CreateTextInput;
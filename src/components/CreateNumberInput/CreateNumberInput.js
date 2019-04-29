import React from 'react';

export const CreateNumberInput = (props) => {
  const { handleChange, max, text, value } = props;
  const name = text.toLowerCase().split(' ')[0]

  return (
    <div className="input-box">
      <input
        className={value ? 'input-effect has-content' : 'input-effect'}
        maxLength={max}
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

export default CreateNumberInput;
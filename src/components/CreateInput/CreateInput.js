import React from 'react';

export const CreateInput = (props) => {
  const { field, handleChange, max, text, value } = props;

  return (
    <div className="input-box">
      <input
        className={value ? 'input-effect has-content' : 'input-effect'}
        maxLength={max}
        name={field}
        onChange={handleChange}
        type="text"
        value={value}
      />
      <label>{text}</label>
      <span className="focus-border"></span>
    </div>
  )
}

export default CreateInput;
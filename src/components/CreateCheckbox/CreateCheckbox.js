import React from 'react';

export const CreateCheckbox = (props) => {
  const { checked, checkBoxes, field, name, value } = props;

  return (
    <div className="checkboxes">
      <input
        checked={checked}
        id={value}
        name={field}
        onChange={checkBoxes}
        type="checkbox"
        value={value}
      />
      <label htmlFor={value}>{name}</label>
    </div>
  )
}

export default CreateCheckbox;
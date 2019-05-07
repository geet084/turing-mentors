import React from 'react';

export const CreateTextArea = (props) => {
  const { background, placeholder, handleChange } = props;
  return (
    <textarea
      className="bg-info"
      type="text"
      placeholder={placeholder}
      name='background'
      rows="18"
      cols="40"
      value={background}
      onChange={handleChange} />
  )
}

export default CreateTextArea;
import React from 'react';
import { Link } from 'react-router-dom';

export const FormChoice = () => {
  return (
    <div className="form-choice">
      <Link to='/mentee'>Mentee</Link>
      <Link to='/mentor'>Mentor</Link>
    </div>
  )
}

export default FormChoice;
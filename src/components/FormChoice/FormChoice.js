import React from 'react';
import { Link } from 'react-router-dom';

export const FormChoice = () => {
  return (
    <div className="form-choice">
      <div>
        <Link className="form-link" to='/mentors'>Show Mentors</Link>
      </div>
      <div>
        <Link className="form-link" to='/mentee'>Mentee</Link>
        <Link className="form-link" to='/mentor'>Mentor</Link>
      </div>
    </div>
  )
}

export default FormChoice;
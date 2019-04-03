import React from 'react';
import { Link } from 'react-router-dom';

export const Mentor = () => {
  return (
    <div className="mentor">
      <Link to='/mentee'>Mentee</Link>
      <Link to='/mentor'>Mentor</Link>
    </div>
  )
}

export default Mentor;
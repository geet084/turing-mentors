import React, { Component } from 'react';

export class MentorControls extends Component {
  render() {
    const { handleChange, javascript, ruby, denver, remote } = this.props;
  
    return (
      <div>
        <input type="checkbox" onClick={handleChange} name="javascript" />JS
        <input type="checkbox" onClick={handleChange} name="ruby" />RUBY
        <input type="checkbox" onClick={handleChange} name="denver" />Denver
        <input type="checkbox" onClick={handleChange} name="remote" />Remote
        <div>
          {javascript && <span>{javascript}</span>}
          {ruby && <span>{ruby}</span>}
          {denver && <span>{denver}</span>}
          {remote && <span>{remote}</span>}
        </div>
      </div>
    )
  }
}

export default MentorControls;
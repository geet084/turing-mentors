import React, { Component } from 'react';
import { CreateCheckbox } from '../../components/CreateCheckbox/CreateCheckbox';

export class MentorControls extends Component {
  checkBoxes = (e) => {
    this.props.handleChange(e)
  }

  render() {
    const { javascript, ruby, denver, remote } = this.props;

    return (
      <div className="mentor-controls">
        <CreateCheckbox field="javascript" name="JS" value='javascript' checkBoxes={this.checkBoxes} />
        <CreateCheckbox field="ruby" name="RUBY" value='ruby' checkBoxes={this.checkBoxes} />
        <CreateCheckbox field="denver" name="Denver" value='denver' checkBoxes={this.checkBoxes} />
        <CreateCheckbox field="remote" name="Remote" value='remote' checkBoxes={this.checkBoxes} />

        {/* <input name='mentorSearch' onChange={this.props.handleSearch} type="text" placeholder="search stuff here" /> */}
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
import React, { Component } from 'react';
import { CreateCheckbox } from '../../components/CreateCheckbox/CreateCheckbox';
import Collapsible from 'react-collapsible';

export class MentorControls extends Component {
  checkBoxes = (e) => {
    this.props.handleChange(e)
  }
  
  getSelections(list) {
    return list.map(selection => {
      const selectionName = selection.toLowerCase();
      return <CreateCheckbox key={selection} field={selectionName} name={selection} value={selectionName} checkBoxes={this.checkBoxes} />;
    });
  }

  render() {
    const mainSelections = this.getSelections(['JavaScript', 'Ruby', 'Denver', 'Remote'])
    const additionalSkills = this.getSelections(['Python', 'Java', 'Elixer', 'C', 'PHP', 'Swift', 'SQL'])

    return (
      <div>
        <p className="pages search-params">Filter results:</p>
        <div className="mentor-controls">
          {mainSelections}
          <Collapsible trigger="More Options &#9660;" triggerWhenOpen="Less Options &#9650;">
            {additionalSkills}
          </Collapsible>
          {/* <input name='mentorSearch' onChange={this.props.handleSearch} type="text" placeholder="search stuff here" /> */}
        </div>
      </div>
    )
  }


}

export default MentorControls;
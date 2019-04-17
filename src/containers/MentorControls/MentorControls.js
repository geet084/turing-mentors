import React, { Component } from 'react';
import { CreateCheckbox } from '../../components/CreateCheckbox/CreateCheckbox';
import Collapsible from 'react-collapsible';

export class MentorControls extends Component {
  checkBoxes = (e) => {
    this.props.handleChange(e)
  }

  render() {
    const { javascript, ruby, denver, remote } = this.props;

    return (
      <div>
        <p className="pages search-params">Filter results:</p>
        <div className="mentor-controls">
          <CreateCheckbox field="javascript" name="JS" value='javascript' checkBoxes={this.checkBoxes} />
          <CreateCheckbox field="ruby" name="RUBY" value='ruby' checkBoxes={this.checkBoxes} />
          <CreateCheckbox field="denver" name="Denver" value='denver' checkBoxes={this.checkBoxes} />
          <CreateCheckbox field="remote" name="Remote" value='remote' checkBoxes={this.checkBoxes} />
          <Collapsible trigger="More Options &#9660;" triggerWhenOpen="Less Options &#9650;">
            <CreateCheckbox field="python" name="Python" value='python' checkBoxes={this.checkBoxes} />
            <CreateCheckbox field="java" name="Java" value='java' checkBoxes={this.checkBoxes} />
            <CreateCheckbox field="elixer" name="Elixer" value='elixer' checkBoxes={this.checkBoxes} />
            <CreateCheckbox field="c" name="C" value='c' checkBoxes={this.checkBoxes} />
            <CreateCheckbox field="php" name="PHP" value='php' checkBoxes={this.checkBoxes} />
            <CreateCheckbox field="swift" name="Swift" value='swift' checkBoxes={this.checkBoxes} />
            <CreateCheckbox field="sql" name="SQL" value='sql' checkBoxes={this.checkBoxes} />
          </Collapsible>
          {/* <input name='mentorSearch' onChange={this.props.handleSearch} type="text" placeholder="search stuff here" /> */}
          <div>
            {javascript && <span>{javascript}</span>}
            {ruby && <span>{ruby}</span>}
            {denver && <span>{denver}</span>}
            {remote && <span>{remote}</span>}
          </div>
        </div>
      </div>
    )
  }
}

export default MentorControls;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMentors } from '../../thunks/getMentors';
import Masonry from 'react-masonry-component';
import MentorCard from '../../components/MentorCard/MentorCard';
import MentorControls from '../MentorControls/MentorControls';

export class Mentors extends Component {
  state = {
    javascript: false,
    ruby: false,
    denver: false,
    remote: false,
  }

  componentDidMount = () => {
    this.getUpdated()
  }

  getUpdated = () => {
    const corsPrefix = 'https://cors-anywhere.herokuapp.com/';
    const root = 'https://turing-mentors-be.herokuapp.com';
    const { javascript, ruby, denver, remote } = this.state;
    let location;
    if ((!denver && !remote) || (denver && remote)) location = 'all'
    else location = denver ? 'denver' : 'remote'
    
    let lang;
    
    if (javascript) lang = 'javascript'
    if (ruby) lang = 'ruby'
    
    let languages = `&tech_skills=${lang}`
    
    if ((!javascript && !ruby) || (javascript && ruby)) languages = ''
    
    const path = `/api/v1/mentors?location=${location}${languages}`;
    // TODO: what is the best way to use env vars with a rails backend?
    const url = corsPrefix + root + path
    this.props.getMentors(url);
  }

  handleChange = ({ target }) => {
    const value = this.state[target.name];

    this.setState({ [target.name]: !value }, this.getUpdated)
  }

  render() {
    const { mentors } = this.props;
    const mentorList = mentors.map(mentor => {
      return <MentorCard key={mentor.id} id={mentor.id} {...mentor.attributes} />
    });

    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    return (
      <div className="mentors-container">
        <MentorControls {...this.state} handleChange={this.handleChange} />
        <Masonry breakpointCols={breakpointColumnsObj}
          className="mentors-grid"
          columnClassName="mentors-grid_column">
          {mentorList}
        </Masonry>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  mentors: state.mentors,
})

export const mapDispatchToProps = (dispatch) => ({
  getMentors: (url) => dispatch(getMentors(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Mentors);
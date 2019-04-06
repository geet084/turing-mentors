import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMentors } from '../../thunks/getMentors';
import Masonry from 'react-masonry-component';
import MentorCard from '../../components/MentorCard/MentorCard';

export class Mentors extends Component {

  componentDidMount = () => {
    const corsPrefix = 'https://cors-anywhere.herokuapp.com/';
    const root = 'https://sheltered-beach-23653.herokuapp.com';
    const path = '/api/v1/mentors?location=all';
    // TODO: what is the best way to use env vars with a rails backend?
    const url = corsPrefix + root + path
    this.props.getMentors(url);
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
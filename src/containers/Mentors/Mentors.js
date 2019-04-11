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
    mentorSearch: '',
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
    this.setState({ [target.name]: !this.state[target.name] }, this.getUpdated);
  }

  handleSearch = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { mentors } = this.props;
    const mentorList = mentors.map(mentor => {
      return <MentorCard key={mentor.id} id={mentor.id} {...mentor.attributes} />
    });
    // const searchList = mentors.map(mentor => {
    //   Object.keys(mentor.attributes).forEach(attr => {
    //     // console.log(mentor.attributes)
    //     if (typeof mentor[attr] === 'string') {
    //       if (mentor.attributes[attr].includes(this.state.mentorSearch)) {
    //         return <MentorCard key={mentor.id} id={mentor.id} {...mentor.attributes} />
    //       }
    //     } else if (typeof mentor[attr] === 'array') { 
    //       // if (mentor.attributes[attr].includes(this.state.mentorSearch)) {
    //       //   return <MentorCard key={mentor.id} id={mentor.id} {...mentor.attributes} />
    //       // }
    //     }

    //   })
    // });
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    return (
      <div className="mentors-container">
        <MentorControls {...this.state} handleSearch={this.handleSearch} handleChange={this.handleChange} />
        <Masonry breakpointCols={breakpointColumnsObj}
          className="mentors-grid"
          columnClassName="mentors-grid_column">
          {this.state.mentorSearch === '' && mentorList}
          {/* {this.state.mentorSearch !== '' && searchList} */}
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
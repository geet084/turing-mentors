import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Contribute from '../../components/Contribute/Contribute';
import FormChoice from '../../components/FormChoice/FormChoice';
import Mentor from '../Mentor/Mentor';
import Mentors from '../Mentors/Mentors';
import MentorPopup from '../../components/MentorPopup/MentorPopup';
import Mentee from '../Mentee/Mentee';
import NotFound from '../../components/NotFound/NotFound';
import { connect } from 'react-redux';

export class Display extends Component {
  render() {
    return (
      <main className="display">
        <Switch>
          <Route exact path='/' component={FormChoice} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/contribute' component={Contribute} />
          <Route exact path='/mentors' component={Mentors} />
          <Route path='/mentors/:id' render={({ match }) => {
            const { id } = match.params;
            const mentor = this.props.mentors.find(mentor => mentor.id === id);

            if (mentor) return <MentorPopup id={mentor.id} {...mentor.attributes} />
            else return <NotFound />
          }} />
          <Route exact path='/mentor' component={Mentor} />
          <Route exact path='/mentee' component={Mentee} />
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  mentors: state.mentors,
})

export default connect(mapStateToProps)(Display);
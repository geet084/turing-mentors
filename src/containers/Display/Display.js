import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Contribute from '../../components/Contribute/Contribute';
import Form from '../Form/Form';
import FormChoice from '../../components/FormChoice/FormChoice';
import Mentors from '../Mentors/Mentors';
import MentorPopup from '../../components/MentorPopup/MentorPopup';
import NotFound from '../../components/NotFound/NotFound';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux';
import { slack } from '../../thunks/slack';

export class Display extends Component {
  sendMessage = (message) => {
    const cors = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://hooks.slack.com/services/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'
    this.props.sendSlack(cors + url, message)
  }
  
  render() {
    return (
      <main className="display">
        <Switch>
          <Route exact path='/' component={FormChoice} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/contribute' component={Contribute} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/mentors' component={Mentors} />
          <Route path='/mentors/:id' render={({ match }) => {
            const { id } = match.params;
            const mentor = this.props.mentors.find(mentor => mentor.id === id);

            if (mentor) return <MentorPopup id={mentor.id} {...mentor.attributes} sendMessage={this.sendMessage}/>
            else return <NotFound />
          }} />
          <Route exact path='/mentor' component={Form} />
          <Route exact path='/mentee' component={Form} />
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  mentors: state.mentors,
})

export const mapDispatchToProps = (dispatch) => ({
  sendSlack: (url, message) => dispatch(slack(url, message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Display);
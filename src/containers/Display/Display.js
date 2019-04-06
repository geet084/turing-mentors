import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Contribute from '../../components/Contribute/Contribute';
import FormChoice from '../../components/FormChoice/FormChoice';
import Mentor from '../Mentor/Mentor';
import Mentee from '../Mentee/Mentee';
import NotFound from '../../components/NotFound/NotFound';

export class Display extends Component {
  render() {
    return (
      <main className="display">
        <Switch>
          <Route exact path='/' component={FormChoice} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/contribute' component={Contribute} />
          <Route exact path='/mentor' component={Mentor} />
          <Route exact path='/mentee' component={Mentee} />
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}

export default Display;
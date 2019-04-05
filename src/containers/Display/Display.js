import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
          <Route exact path='/mentor' component={Mentor} />
          <Route exact path='/mentee' component={Mentee} />
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}

export default Display;
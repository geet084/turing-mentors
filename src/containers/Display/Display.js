import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Mentor } from '../../components/Mentor/Mentor';

export class Display extends Component {
  render() {
    return (
      <main className="display">
        <Switch>
          <Route exact path='/' component={Mentor} />
          <Route path='/mentor' render={() => {
            return <div>mentor</div>
          }} />
          <Route path='/mentee' render={() => {
            return <div>mentee</div>
          }} />
        </Switch>
      </main>
    )
  }
}

export default Display;
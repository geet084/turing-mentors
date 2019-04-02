import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import HeroImage from '../../components/HeroImage/HeroImage';
import Display from '../Display/Display';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Turing Mentors</h1>
        <Nav />
        <HeroImage />
        <Display />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps)(App);

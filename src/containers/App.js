import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Turing Mentors</h1>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps)(App);

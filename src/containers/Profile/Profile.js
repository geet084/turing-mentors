import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Profile extends Component {
  render() {
    
    return (
      <div>
       <h2>Profile page</h2>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(Profile);
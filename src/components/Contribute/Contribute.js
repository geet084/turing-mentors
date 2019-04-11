import React, { Component } from 'react';

export class Contribute extends Component {
  render() {
    return (
      <div className="link-content pages">
        <h2>Want to contribute?</h2>
        <p>Please send questions to:</p>
        <h4 className="dev-links">BE: <a href="#">Ricardo Ledesma</a></h4>
        <h4 className="dev-links">FE: <a href="#">Travis Gee</a></h4>
      </div>
    )
  }
}

export default Contribute;
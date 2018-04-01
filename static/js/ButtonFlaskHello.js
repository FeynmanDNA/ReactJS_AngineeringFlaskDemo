import React from 'react';

// use jquery to perform a GET request against the server
let $ = require('jquery');

export default class ButtonFlaskHello extends React.Component {
  getFlaskHello = () => {
    $.get(window.location.href + 'hello', (data) => {
      console.log(data);
      this.props.handleGET(data);
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.getFlaskHello}>
          Click to change Hello's language, using Flask backend's data
        </button>
      </div>
    );
  }
}


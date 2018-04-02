import React from 'react';
import ButtonReactHello from './ButtonReactHello';
import ButtonFlaskHello from './ButtonFlaskHello';

// import the css file for webpack to extract
require('../css/BeforeBundle.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helloLang: "Hello"
    };
  }

  changeReactHello = ReactHello => {
    this.setState({
      helloLang: ReactHello
    });
  }

  changeFlaskHello = FlaskHello => {
    this.setState({
      helloLang: FlaskHello
    });
  }

  render() {
    return(
      <div>
        <img src="dist/header.png" alt="test" />
        <h1>{this.state.helloLang}, yo!</h1>
        <ButtonReactHello handleClick={this.changeReactHello} />
        <hr />
        <ButtonFlaskHello handleGET={this.changeFlaskHello} />
      </div>
    );
  }
}


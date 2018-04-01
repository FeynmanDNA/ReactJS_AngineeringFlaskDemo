import React from 'react';
import ButtonReactHello from './ButtonReactHello';
import ButtonFlaskHello from './ButtonFlaskHello';

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
        <h1>{this.state.helloLang}, yo!</h1>
        <ButtonReactHello handleClick={this.changeReactHello} />
        <hr />
        <ButtonFlaskHello handleGET={this.changeFlaskHello} />
      </div>
    );
  }
}


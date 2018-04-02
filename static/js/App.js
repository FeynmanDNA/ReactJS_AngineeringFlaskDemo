import React from 'react';
import ButtonReactHello from './ButtonReactHello';
import ButtonFlaskHello from './ButtonFlaskHello';

// import the css file for webpack to extract
require('../css/BeforeBundle.css');

// explicitly load the image for webpack
import BackgroundImg from '../images/header.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helloLang: "Hello"
    };
  }

  addImage() {
    let loadImg = new Image();
    loadImg.src = BackgroundImg;
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
        {this.addImage()}
        <div className="header-img"></div>
        <h1>{this.state.helloLang}, yo!</h1>
        <ButtonReactHello handleClick={this.changeReactHello} />
        <hr />
        <ButtonFlaskHello handleGET={this.changeFlaskHello} />
      </div>
    );
  }
}


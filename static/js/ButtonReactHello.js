import React from 'react';

export default class ButtonReactList extends React.Component {
  passReactList = () => {
    const langList = ["Ni Hao", "Bonjour", "Konnichiwa", "Ciao", "Ola", "Hola", "Terve", "Annyeong", "Hello"];
    let randomIndex = Math.floor(Math.random()*langList.length);

    this.props.handleClick(langList[randomIndex]);
  }

  render() {
    return(
      <div>
        <button onClick={this.passReactList}>
          Click to change Hello's language, using ReactJS Math floor and random
        </button>
      </div>
    );
  }
}


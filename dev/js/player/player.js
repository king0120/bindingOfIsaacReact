import React, {Component} from 'react';
import keydown from 'react-keydown';

// @keydown
class Player extends Component {
  constructor() {
    super();
    this.state = {
      x: 300,
      y: 300
    };
    this.move = this.move.bind(this);
  }

  componentWillReceiveProps( nextProps ) {
    const {keydown: {event}} = nextProps;
    if (event){
      console.log(event)
    }
  }

  move(event){
    console.log(this)
    console.log(event.code);
    switch(event.code){
      case 'KeyW' :
        console.log(this.state.y);
        this.setState({y: this.state.y * .95});
        console.log(this.state.y);
        break;
      case 'KeyS' :
        console.log(this.state.y);
        this.setState({y: this.state.y * 1.05});
        console.log(this.state.y);
        break;
      case 'KeyA' :
        console.log(this.state.x);
        this.setState({x: this.state.x * .95});
        console.log(this.state.x);
        break;
      case 'KeyD' :
        console.log(this.state.x);
        this.setState({x: this.state.x * 1.05});
        console.log(this.state.x);
        break;
    }
    
  }

  render (){
    window.addEventListener('keydown', this.move);
    var playerStyle = {
      height: '75px',
      width: '75px',
      position: 'absolute',
      top: this.state.y,
      left: this.state.x,
      transition: 'all 0.5s ease'
    }
    return(<img style={playerStyle} onKeyDown={this.move} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/The_Binding_Of_Isaac_Logo.svg/2000px-The_Binding_Of_Isaac_Logo.svg.png"/>)
  }
}
export default keydown(Player);
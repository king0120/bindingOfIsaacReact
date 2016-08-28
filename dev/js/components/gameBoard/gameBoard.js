import React, {Component} from 'react';
import Player from '../../player/player';

// @keydown
class GameBoard extends Component {
  constructor() {
    super();
    
  }
  render (){
    var gameBoardStyle = {
      width: '75vw',
      height: '55vh',
      margin: '0 auto',
      background: '#AAAAAA'
    }
    return(<div style={gameBoardStyle} >
             <Player />
             <h2>saf;oiafjo</h2>
            </div>)
  }
}
export default Player;
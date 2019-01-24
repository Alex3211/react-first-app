import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plateau: [ [0,0,0],[0,0,0],[0,0,0] ],
      playerTypes: ['X', 'O'],
      playerIndex: 0,

    };
  }
  onSquareClick(player, rowIndex, colIndex) {
    const newPlateau = this.state.plateau;
    newPlateau[rowIndex][colIndex] = player;
    this.setState({plateau: newPlateau, playerIndex: (this.state.playerIndex === 0 ? 1 : 0)})
  }
  renderSquare(i, player, rowIndex, colIndex) {
    return <Square value={i} onClick={() => this.onSquareClick(player, rowIndex, colIndex)} />;
  }
  render() {
    const { playerTypes, playerIndex, plateau } = this.state;
    const status = `${playerTypes[playerIndex]} have to play`;
    return (
      <div>
        <div className="status">{status}</div>
        {
          plateau.map((row, rowIndex) => {
            return (
              <div className="board-row">
              {
                row.map((col, colIndex) => {
                  return(
                    this.renderSquare(plateau[rowIndex][colIndex], playerTypes[playerIndex], rowIndex, colIndex)
                  )
                })
              }
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

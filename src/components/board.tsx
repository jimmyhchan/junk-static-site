import * as React from 'react';
import { Square, SqOption } from './square';

const initialBoardState = {
  squares: Array(9).fill(null),
  xIsNext: true
}
type BoardState = {
  squares: SqOption[],
  xIsNext: boolean
}

const getMark = (isNext:boolean):SqOption => {
  return isNext ? 'X' : 'O';
}
const calculateWinner = (squares: SqOption[]):SqOption => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let index = 0; index < lines.length; index++) {
    const [a,b,c] = lines[index];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export class Board extends React.Component<object, BoardState> {
  readonly state:BoardState = initialBoardState;
  renderSquare(idx:number) {
    return (
      <Square 
        value={this.state.squares[idx]}
        onClick={() => this.handleClick(idx)}
      />
    );

  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = 'Next player: ' + (getMark(this.state.xIsNext));
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }

  private handleClick = (idx: number) => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[idx]) {
      return;
    }
    squares[idx] = getMark(this.state.xIsNext);
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    });
  }
}
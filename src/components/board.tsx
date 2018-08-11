import * as React from 'react';
import { Square, SqOption } from './square';

const initialBoardState = {
  squares: Array(9).fill(null)
}
type BoardState = {
  squares: SqOption[]
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
    const status = 'Next player: X';
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
    squares[idx] = 'X';
    this.setState({
      squares
    });
  }
}
import * as React from 'react';

type SqOption = null | 'X' | 'O';

const initialState = {
  value: null
}


type SqState = {
  value: SqOption
}

type SqProp = {
  value: SqOption
}
export class Square extends React.Component <SqProp, SqState> {
  readonly state:SqState = initialState;
  handleClick = () => this.setState({ value: 'X'});
  render() {
    return (
      <button className="square" onClick={this.handleClick}>
        {this.state.value}
      </button>
    )
  }
}
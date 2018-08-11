import * as React from 'react';

export type SqOption = null | 'X' | 'O';

const initialState = {
  value: null
}


type SqState = {
  value: SqOption
}

type SqProp = {
  value: SqOption,
  onClick?: React.MouseEventHandler<HTMLElement>
}
export class Square extends React.Component <SqProp, SqState
> {
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
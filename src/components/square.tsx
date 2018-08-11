import * as React from 'react';

export type SqOption = null | 'X' | 'O';

type SqProp = {
  value: SqOption,
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Square: React.SFC<SqProp> = (props:SqProp) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}; 
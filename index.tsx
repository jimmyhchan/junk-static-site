import './index.scss';
import * as React from 'react';
import {render} from 'react-dom';
import { Game } from './src/components/game';
// import {HelloMessage} from './src/components/hello';

const mount = document.getElementById('app');
// render(<HelloMessage name="foo" />, mount);
render(
  <Game />, 
  mount
)

import React from 'react';
import { StyledCell } from '../components/styles/StyledCell';
import { TETROMINOS } from './tetrominos';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
        {console.log('rerender data')}
   </StyledCell> 
)

export default Cell;
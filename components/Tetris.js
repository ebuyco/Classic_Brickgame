import React, {useState} from 'react';
import { StyledTetrisWrapper, StyledTetris } from '../components/styles/StyledTetris';
import {usePlayer} from '../components/hooks/usePlayer';
import {useStage} from '../components/hooks/useStage';

import { createStage } from '../components/gameHelpers';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  const [dropTime, setDroptime ] = useState(null);
  const [gameOver, setGameOver] = useStage(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log('working');

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0});
  }

  const startGame = () => {
    console.log('game is working');
    setStage(createStage());
    resetPlayer();
  }

  const dropPlayer = () => {
        drops();
  }

  const move = ({ keyCode }) => {
    if(!gameOver){
      if (keyCode === 37){
        movePlayer(-1);
      } else if (keyCode === 39 ){
        movePlayer(1);
      } else if (keycode === 40){
          dropPlayer();
      }
    }
  }
  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over"/>
          ) : (
            <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;

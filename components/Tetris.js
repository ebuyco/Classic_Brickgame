import React, {useState} from 'react';
import { StyledTetrisWrapper, StyledTetris } from '../components/styles/StyledTetris';
import {usePlayer} from '../components/hooks/usePlayer';
import {useStage} from '../components/hooks/useStage';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  const [dropTime, setDroptime ] = useState(null);
  const [gameOver, setGameOver] = useStage(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log('working');
  return (
    <StyledTetrisWrapper>
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
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;

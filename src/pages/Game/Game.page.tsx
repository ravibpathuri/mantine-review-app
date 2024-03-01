import React, { ChangeEvent } from 'react';
import { Button, Input, Stack } from '@mantine/core';
import { GameHistory } from './GameHistory';
import { GameHistoryItemType } from './types';

const GamePage = () => {
  const [target, setTarget] = React.useState<number>();
  const [aim, setAim] = React.useState<number | undefined>();
  const [atttempts, setAttempts] = React.useState<GameHistoryItemType[]>([]);

  const handleNewGame = () => {
    const newTarget = Math.floor(Math.random() * 100) + 1;
    setTarget(newTarget);
    setAim(undefined);
    setAttempts([]);
  };

  const handleAimChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAim(parseInt(e.target.value, 10));
  };

  const handleAim = () => {
    if (!aim || !target) {
      return;
    }

    if (aim < target) {
      console.log('aim high');
      setAttempts([...atttempts, { currentGuess: aim, message: 'Aim High' }]);
    } else if (aim > target) {
      console.log('Aim Low');
      setAttempts([...atttempts, { currentGuess: aim, message: 'Aim Low' }]);
    } else if (aim === target) {
      console.log('you got it');
      setAttempts([...atttempts, { currentGuess: aim, message: 'You Got it!' }]);
    }
  };

  return (
    <>
      {/* <div>Target : {target}</div> */}
      <Stack>
        <Button className="test" onClick={handleNewGame}>
          New Game
        </Button>

        <Stack gap={5}>
          <Input type="number" value={aim} onChange={handleAimChange} />

          <Button variant="outlined" onClick={handleAim}>
            Aim
          </Button>
        </Stack>
        <GameHistory atttempts={atttempts} />
      </Stack>
    </>
  );
};

export default GamePage;

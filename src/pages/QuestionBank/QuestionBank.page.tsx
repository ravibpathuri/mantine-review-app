import React, { ChangeEvent } from 'react';
import { Anchor, Button, Flex, Input } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconPlus } from '@tabler/icons-react';
import { GameHistory } from './GameHistory';
import { GameHistoryItemType } from './types';
import { PageHeader } from '@/components';
import { PATH_DASHBOARD } from '@/routes';

const items = [
  { title: 'Home', href: PATH_DASHBOARD.root },
  { title: 'Question Bank', href: '#' },
].map((item, index) => (
  <Anchor component={Link} to={item.href} key={index}>
    {item.title}
  </Anchor>
));

const QuestionBankPage = () => {
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
      <PageHeader
        title="Question Bank"
        breadcrumbItems={items}
        actionItems={
          <>
            <Button leftSection={<IconPlus size={18} />} className="test" onClick={handleNewGame}>
              New Question
            </Button>
          </>
        }
      />

      <Flex gap={{ base: 'sm', sm: 4 }} mt={15}>
        <Input type="number" value={aim} onChange={handleAimChange} />

        <Button variant="outlined" onClick={handleAim}>
          Aim
        </Button>
      </Flex>
      <GameHistory atttempts={atttempts} />
    </>
  );
};

export default QuestionBankPage;

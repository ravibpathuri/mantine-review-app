import React from 'react';
import { ActionIcon, Box, Flex, Group, ScrollArea, Text, Title } from '@mantine/core';
import { IconPower, IconX } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { UserProfileButton } from '@/components';
import classes from './Navigation.module.css';
import { LinksGroup } from '@/components/Navigation/Links/Links';
import { MOCK_DATA, MOCK_USER_PROFILE } from './MockData';

type NavigationProps = {
  onClose: () => void;
};

const AppNavigation: React.FC<NavigationProps> = ({ onClose }) => {
  //const theme = useMantineTheme();
  const tablet_match = useMediaQuery('(max-width: 768px)');

  const links = MOCK_DATA.map((m) => (
    <Box pl={0} mb="md" key={m.title}>
      <Text tt="uppercase" size="xs" pl="md" fw={500} mb="sm" className={classes.linkHeader}>
        {m.title}
      </Text>
      {m.links.map((item) => (
        <LinksGroup {...item} key={item.label} onClose={onClose} />
      ))}
    </Box>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Flex justify="space-between" align="center" gap="sm">
          <Group justify="space-between" style={{ flex: tablet_match ? 'auto' : 1 }}>
            {/* <Logo className={classes.logo} /> */}

            <Title order={3}>Test App</Title>
          </Group>
          {tablet_match && (
            <ActionIcon onClick={onClose} variant="transparent">
              <IconX color="white" />
            </ActionIcon>
          )}
        </Flex>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserProfileButton
          email={MOCK_USER_PROFILE.email}
          image={MOCK_USER_PROFILE.avatar}
          name={MOCK_USER_PROFILE.name}
          signOffIcon={<IconPower onClick={() => alert('logging off')} />}
          asAction
        />
      </div>
    </nav>
  );
};

export default AppNavigation;

import React from 'react';
import { AppShell, Container, rem, useMantineTheme } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { AppMain, FooterNav, HeaderNav } from '@/components';
import classes from './ExamLayout.module.css';

interface ExamLayoutProps extends React.PropsWithChildren {}

const ExamLayout: React.FC<ExamLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();
  //const [opened, setOpened] = React.useState(false);
  //const [themeOpened, { open: themeOpen, close: themeClose }] = useDisclosure(false);
  const tablet_match = useMediaQuery('(max-width: 768px)');
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      layout="default"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header
        style={{
          height: rem(60),
          border: 'none',
          boxShadow: tablet_match ? theme.shadows.md : theme.shadows.sm,
        }}
      >
        <Container fluid py="sm" px="lg">
          <HeaderNav
            opened={opened}
            handleOpen={() => toggle()}
            desktopOpened={desktopOpened}
            mobileOpened={mobileOpened}
            toggleDesktop={toggleDesktop}
            toggleMobile={toggleMobile}
          />
        </Container>
      </AppShell.Header>

      <AppShell.Main className={classes.main}>
        <AppMain>{children}</AppMain>
      </AppShell.Main>
      <AppShell.Footer p="md">
        <Container fluid px="lg">
          <FooterNav />
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
};

export default ExamLayout;

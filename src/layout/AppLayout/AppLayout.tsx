import React from 'react';
import { AppShell, Container, rem, useMantineTheme } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { AppMain, AppNavigation, FooterNav, HeaderNav } from '@/components';
import classes from './AppLayout.module.css';

interface AppLayoutProps extends React.PropsWithChildren {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = React.useState(false);
  //const [themeOpened, { open: themeOpen, close: themeClose }] = useDisclosure(false);
  const tablet_match = useMediaQuery('(max-width: 768px)');
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
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
            layout="App"
            opened={opened}
            handleOpen={() => setOpened((o: boolean) => !o)}
            desktopOpened={desktopOpened}
            mobileOpened={mobileOpened}
            toggleDesktop={toggleDesktop}
            toggleMobile={toggleMobile}
          />
        </Container>
      </AppShell.Header>
      <AppShell.Navbar>
        <AppNavigation
          onClose={() => {
            setOpened(false);
            toggleMobile();
            toggleDesktop();
          }}
        />
      </AppShell.Navbar>
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

export default AppLayout;

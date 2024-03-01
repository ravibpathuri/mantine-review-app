import React from 'react';
import { AppShell, Box, useMantineTheme } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { FooterNav, GuestHeaderNav } from '@/components';

interface GuestLayoutProps extends React.PropsWithChildren {}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  const theme = useMantineTheme();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <AppShell header={{ height: 60, collapsed: !pinned, offset: false }}>
        <AppShell.Header>
          <GuestHeaderNav />
        </AppShell.Header>
        <AppShell.Main>
          <Box style={{ backgroundColor: theme.colors.gray[0] }}>{children}</Box>
          <FooterNav />
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export { GuestLayout };

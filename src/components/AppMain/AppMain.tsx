import React from 'react';
import { Box } from '@mantine/core';

interface AppMainProps extends React.PropsWithChildren {}

const AppMain: React.FC<AppMainProps> = ({ children }) => (
  <Box py="lg" px="md">
    {children}
  </Box>
);

export default AppMain;

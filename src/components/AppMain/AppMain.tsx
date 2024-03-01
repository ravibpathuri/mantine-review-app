import React from 'react';
import { Box } from '@mantine/core';
import classes from './App.module.css';

interface AppMainProps extends React.PropsWithChildren {}

const AppMain: React.FC<AppMainProps> = ({ children }) => (
  <Box py="lg" px="md" className={classes.main}>
    {children}
  </Box>
);

export default AppMain;

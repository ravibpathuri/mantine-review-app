import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { theme } from '../src/theme';
import store from '@/redux';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </Provider>
    ),
  });
}

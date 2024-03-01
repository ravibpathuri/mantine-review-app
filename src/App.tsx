import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
//import 'mantine-react-table/styles.css'; //import MRT styles
import 'mantine-datatable/styles.layer.css';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { Router } from './Router';
import { theme } from './theme';
import store from './redux';

export default function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </Provider>
  );
}

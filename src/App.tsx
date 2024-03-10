import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
//import 'mantine-react-table/styles.css'; //import MRT styles
import 'mantine-datatable/styles.layer.css';
import 'cross-fetch/polyfill';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { Router } from './Router';
import { theme } from './theme';
import store from './redux';
import { CognitoProvider } from '@/context';

const clientID = import.meta.env.VITE_COGNITO_CLIENT_ID;
const userPoolID = import.meta.env.VITE_COGNITO_USER_POOL_ID;
//const identityPoolID = import.meta.env.VITE_COGNITO_IDENTITY_POOL_ID;

export default function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <CognitoProvider
          cognitoClientID={clientID}
          cognitoUserPoolID={userPoolID}
          //cognitoIdentityPoolID={identityPoolID}
        >
          <Router />
        </CognitoProvider>
      </MantineProvider>
    </Provider>
  );
}

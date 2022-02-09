import {Provider} from 'react-redux';
import {Global, css} from '@emotion/react';
import {StyledEngineProvider} from '@mui/material/styles';

import store from '../lib/redux/store';
import AppContainer from '../components/page/AppContainer';

const globals = css`
  html, 
  body {
    padding: 0;
    margin: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <Global styles={globals} />
            <StyledEngineProvider injectFirst>
                <AppContainer pageProps={pageProps} Component={Component} />
            </StyledEngineProvider>
        </Provider>
    );
}

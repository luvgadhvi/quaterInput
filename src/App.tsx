import * as React from "react";
import { Provider } from "react-redux";
import store from "./Store/index";
import ApplicationRouter from './Router/Router.Container';
import { ThemeProvider } from '@mui/material/styles'
import BaseTheme from './Theme'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={BaseTheme}>
        <ApplicationRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configureStore from "store/config/store.config";

import * as serviceWorker from "./core/service-worker/serviceWorker";
import { GlobalStyles, theme } from "./styles";
import { ThemeProvider } from "styled-components";
import { Content, Card, Grid } from "./components";

const store = configureStore();

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Content data-cy="content">
          <Card data-cy="card">
            <Grid />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

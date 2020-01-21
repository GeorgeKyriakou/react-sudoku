import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configureStore from "store/config/store.config";

import { GlobalStyles, theme } from "./styles";
import { ThemeProvider } from "styled-components";
import { Content, Card, Grid } from "./components";
import { Guidelines } from "components/instructions/guidelines.component";

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
          <Guidelines />
        </Content>
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);

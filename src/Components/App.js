/**
 * Application view.
 * React, React-Route, Redux Test project.
 */

import React from "react";
import Menu from "./Menu";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../themes/getTheme";
import { connect } from "react-redux";
import Container from "./Common/Container";

const App = props => {
  return (
    <ThemeProvider theme={getTheme(props.theme)}>
      <Container>
        <Menu />
        <div className="container container-fluid d-flex flex-row justify-content-center mt-5">{props.children}</div>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  theme: state.items.item.theme
});

export default connect(
  mapStateToProps,
  null
)(App);

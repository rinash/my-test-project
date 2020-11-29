/**
 * Theme selector component. 
 * Used in main form.
 * React, React-Route, Redux Test project.
 */

import React, { useCallback } from "react";
import Dropdown from "./Dropdown";
import { connect } from "react-redux";
import { changeTheme } from "../redux/actions";

const ThemeSelector = ({ changeTheme, theme }) => {
  const onChangeHandler = useCallback(value => changeTheme(value), [changeTheme]);

  return (
    <Dropdown title={`Theme ${theme}`} onChange={onChangeHandler}>
      <Dropdown.Item value="light">Light</Dropdown.Item>
      <Dropdown.Item value="dark">Dark</Dropdown.Item>
      <Dropdown.Item value="custom">Custorm</Dropdown.Item>
    </Dropdown>
  );
};

const mapDispatchToProps = {
  changeTheme: changeTheme
};

const mapStateToProps = state => ({
  theme: state.items.theme
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSelector);

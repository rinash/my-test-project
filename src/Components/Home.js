/**
 * Main form component.
 * React, React-Route, Redux Test project.
 */

import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createItem } from "../redux/actions";
import Dropdown from "./Dropdown";
import { Button, Wrapper } from "./Common/Button";
import { getThemeName } from "../themes/getTheme";

const Home = ({ createItem }) => {
  let history = useHistory();

  const [state, setState] = useState({
    name: "",
    date: "",
    text: "",
    theme: "light"
  });

  const bind = name => {
    return {
      value: state[name],
      onChange: (e, value) => {
        e.preventDefault();
        setState(prevState => ({ ...prevState, [name]: value || e.target.value }));
      }
    };
  };

  const submitHandler = useCallback(
    e => {
      e.preventDefault();

      const payload = {
        name: state.name,
        date: state.date,
        text: state.text,
        theme: state.theme
      };

      createItem(payload);
      history.push("/item");
    },
    [createItem, history, state.date, state.name, state.text, state.theme]
  );

  const validator = () => !state.date || !state.text || !state.name;

  return (
    <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">Create New Post</h5>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" {...bind("name")} />
            <small className="form-text text-muted">Enter your name</small>
          </div>
          <div className="form-group">
            <label htmlFor="date">Post Date</label>
            <input type="date" className="form-control" {...bind("date")} />
            <small className="form-text text-muted">Select post date</small>
          </div>
          <div className="form-group">
            <label htmlFor="text">Message Text</label>
            <textarea type="textarea" className="form-control" {...bind("text")} spellCheck="true" rows="3" />
            <small className="form-text text-muted">Write some text</small>
          </div>
          <div className="form-group">
            <label htmlFor="theme">Output Theme</label>
            <Dropdown title={`Theme ${getThemeName(state.theme)}`} {...bind("theme")}>
              <Dropdown.Item value="light">Light</Dropdown.Item>
              <Dropdown.Item value="dark">Dark</Dropdown.Item>
              <Dropdown.Item value="custom">Custorm</Dropdown.Item>
            </Dropdown>
            <small className="form-text text-muted">The selected theme will be applied on page confirmation</small>
          </div>
          <Wrapper>
            <Button type="submit" className="btn" disabled={validator()}>
              Submit
            </Button>
          </Wrapper>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  createItem: createItem
};

export default connect(
  null,
  mapDispatchToProps
)(Home);

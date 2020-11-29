/**
 * Confirmed post (item) component.
 * React, React-Route, Redux Test project.
 */

import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearItem } from "../redux/actions";
import { Button, Wrapper } from "./Common/Button";
import Badge from "./Common/Badge";

const Items = ({ item, clearItem }) => {
  let history = useHistory();

  const clickHandler = useCallback(
    () => {
      clearItem();
      history.push("/");
    },
    [clearItem, history]
  );

  if (!item.name || !item.text || !item.date) {
    return (
      <div className="text-center">
        <h4>You haven't added any post yet</h4>
        <Wrapper>
          <Button type="button" className="btn" onClick={clickHandler}>
            Go back
          </Button>
        </Wrapper>
      </div>
    );
  }

  return (
    <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">New Post</h5>
        <h6 className="mt-2 text-muted" mb={0}>
          {item.name}
        </h6>
        <small className="text-muted">{item.date}</small>
        <p>
          <Badge className="badge">Theme {item.theme}</Badge>
        </p>
        <p className="card-text">{item.text}</p>
        <p>
          See Code on <a href="https://github.com/">GitHub</a>.
        </p>
        <Wrapper>
          <Button type="button" className="btn" onClick={clickHandler}>
            Go back
          </Button>
        </Wrapper>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  item: state.items.item
});

const mapDispatchToProps = {
  clearItem: clearItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

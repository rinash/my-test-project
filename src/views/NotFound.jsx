/**
 * Page not found component.
 * React, React-Route, Redux Test project.
 */

import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button, Wrapper } from "../components/styled/Button";

const NotFoundView = () => {
  let history = useHistory();

  const clickHandler = useCallback(
    () => {
      history.push("/");
    },
    [history]
  );

  return (
    <div className="text-center">
      <h4>Page Not Found </h4>
      <Wrapper>
        <Button type="button" className="btn" onClick={clickHandler}>
          Go Home
        </Button>
      </Wrapper>
    </div>
  );
};

export default NotFoundView;

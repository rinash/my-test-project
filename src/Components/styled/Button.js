/**
 * Styled button component.
 * React, React-Route, Redux Test project.
 */

import styled from "styled-components";

const Button = styled.button`
  color: ${props => props.theme.button.color};
  background-color: ${props => props.theme.button.background};
  border-color: ${props => props.theme.button.border};

  &.*:hover: {
    color: ${props => props.theme.button.color};
  }
`;

const Wrapper = styled.div`
  .btn:disabled {
    color: white;
    background-color: ${props => props.theme.button.disabled};
    border-color: ${props => props.theme.button.disabled};
  }

  .btn:hover:not(:disabled):not(.disabled) {
    color: white;
    background-color: ${props => props.theme.button.hover};
    border-color: ${props => props.theme.button.hover};
  }
`;

export { Button, Wrapper };

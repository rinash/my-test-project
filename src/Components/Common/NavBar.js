/**
 * Styled nav bar component.
 * React, React-Route, Redux Test project.
 */

import styled from "styled-components";

const NavBar = styled.div`
  background-color: ${props => props.theme.navbar.background};

  .nav .nav-item .nav-link {
    color: ${props => props.theme.navbar.color};

    &:focus,
    &:hover {
      color: ${props => props.theme.navbar.hover};
    }
  }

  .nav .nav-item .nav-active {
    font-weight: 700;
  }
`;

export default NavBar;

/**
 * Styled container component.
 * React, React-Route, Redux Test project.
 */

import styled from "styled-components";

const Container = styled.div`
  background: ${props => props.theme.body.background};
  height: 100vh;
`;

export default Container;

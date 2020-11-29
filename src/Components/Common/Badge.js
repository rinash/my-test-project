/**
 * Styled badge component.
 * React, React-Route, Redux Test project.
 */

import styled from "styled-components";

const Badge = styled.span`
  color: ${props => props.theme.badge.color};
  background-color: ${props => props.theme.badge.background};
`;

export default Badge;

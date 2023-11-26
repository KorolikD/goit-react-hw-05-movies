import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLinc = styled(NavLink)`
  color: blue;

  &.active {
    color: red;
  }
`;

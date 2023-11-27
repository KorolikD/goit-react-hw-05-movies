import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    color: ${theme.colors.accent};
  }
  &.active {
    color: ${theme.colors.accent};
  }
`;

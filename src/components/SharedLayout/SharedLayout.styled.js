import styled from 'styled-components';
import { theme } from 'styles';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const NavigateLink = styled(NavLink)`
  display: block;
  padding: 8px 8px;
  text-align: center;
  color: ${theme.colors.dark};
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  min-width: 80px;

  &.active {
    color: ${theme.colors.accent};
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const Header = styled.header`
  background-color: ${theme.colors.light};

  padding: 8px 0;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

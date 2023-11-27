import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles';

export const LinkOnBtn = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: ${theme.colors.accent};
  }
`;

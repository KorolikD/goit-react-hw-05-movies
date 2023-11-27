import styled from 'styled-components';
import { theme } from 'styles';

export const MovieListItem = styled.li`
  margin-bottom: 2px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  :focus {
    color: ${theme.colors.accent};
  }
`;

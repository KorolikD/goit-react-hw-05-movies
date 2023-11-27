import styled from 'styled-components';
import { theme } from 'styles';

export const SearchForm = styled.form`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border: 2px solid ${theme.colors.accent};
    outline: none;
  }
`;

export const Button = styled.button`
  margin-left: 5px;

  width: auto;
  height: 30px;
  padding: 0 10px;

  /* border-radius: 2px; */
  background-color: ${theme.colors.gray};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;

  font-style: normal;
  font-weight: 500;

  &:hover,
  :focus {
    background-color: ${theme.colors.accent};
  }
`;

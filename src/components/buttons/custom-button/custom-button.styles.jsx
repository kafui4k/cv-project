import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background: transparent;
  border-radius: 3px;
  border: 3px solid palevioletred;
  color: black;
  padding: 0.25em 1em;
  font-weight: bold;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

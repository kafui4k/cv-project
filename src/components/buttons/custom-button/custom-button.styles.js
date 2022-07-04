import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  border: 3px solid palevioletred;
  padding: 0.25em 1em;
  font-weight: bold;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export const DeleteButton = styled(Button)`
  background: transparent;
  color: black;
`;

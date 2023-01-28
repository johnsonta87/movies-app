import styled, { css } from 'styled-components';

export const ActionButtonStyle = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 999px;
  padding: 1em 2em;
  overflow: hidden;
  transition: background 0.2s ease-out;
  border: 1px solid ${(props) => props.theme.colors.primary};
  text-transform: capitalize;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }

  ${(props) =>
    props.isSimple &&
    css`
      background-color: transparent;
      border-radius: 0;
      border: 0;
      padding: 0;

      &:hover {
        background-color: transparent;
      }
    `};
`;

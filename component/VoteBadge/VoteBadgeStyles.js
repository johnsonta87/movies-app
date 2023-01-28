import styled, { css } from 'styled-components';

export const VoteBadgeStyles = styled.span`
  position: absolute;
  bottom: -1em;
  left: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: #dc143c;
  width: 35px;
  height: 35px;
  border-radius: 999px;

  &:before {
    content: '%';
    position: absolute;
    right: 3px;
    top: 10px;
    font-size: 0.5rem;
  }

  ${(props) =>
    props.percent >= 60 &&
    css`
      background-color: #f0e68c;
    `};

  ${(props) =>
    props.percent >= 70 &&
    css`
      background-color: #7cfc00;
    `};
`;

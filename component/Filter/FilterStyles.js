import styled, { css } from 'styled-components';

export const FilterStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5em;
  margin-bottom: 2em;

  ${(props) =>
    props.isSimple &&
    css`
      display: flex;
    `};
`;

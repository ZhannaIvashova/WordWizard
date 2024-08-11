import { styled } from 'styled-components';
import { StyledBorderBase } from '../styleGeneral';

/*export const StyledHeaderTable = styled(StyledBorderBase)`
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
`*/

export const StyledHeaderTable = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid black;

  ${StyledBorderBase}
`
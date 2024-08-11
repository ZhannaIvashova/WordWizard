import { styled } from 'styled-components';
import { SyledButtonBase, SyledContainerButtonBase, StyledBorderBase } from '../styleGeneral';

export const StyledSaveButton = styled(SyledButtonBase)`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  background-color: green;
  color: white;
`
export const SyledContainerButton = styled(SyledContainerButtonBase)`
  ${StyledBorderBase};
  /*border-bottom: 1px solid black;
  border-left: 1px solid black;
  ${props => props.isLast && 'border-right: 1px solid black'}*/
`;

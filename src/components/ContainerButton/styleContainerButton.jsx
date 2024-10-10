import { styled } from 'styled-components';
import { StyledContainerButtonBase, StyledBorderBase } from '../styleGeneral';


export const SyledContainerButton = styled(StyledContainerButtonBase)`
  ${StyledBorderBase};

  ${({ isFirst }) => isFirst && `background-color: #d0f4fd`}
`

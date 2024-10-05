import { styled } from 'styled-components';
import { StyledButtonBase } from '../styleGeneral';

export const StyledSaveButton = styled(StyledButtonBase)`
  width: 60px;
  background-color: green;
  color: white;

  @media (max-width: 874px) {
    width: 30px;
    font-size: 12px;
  }
`

export const StyledBorder = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`
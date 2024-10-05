import { styled } from 'styled-components';
import { StyledButtonBase } from '../styleGeneral';


export const StyledEditButton = styled(StyledButtonBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  background-color: #ebda69;

  @media (max-width: 874px) {
    width: 30px;
  }
`

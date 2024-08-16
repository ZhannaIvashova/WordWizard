import { styled } from 'styled-components';
import { StyledBorderBase } from '../styleGeneral';

/*export const StyledLabel = styled(StyledBorderBase).attrs({as: 'label'})`
  padding: 3px;
`
export const StyledInput = styled(StyledBorderBase).attrs({as: 'input'})`
  padding: 5px;
`*/

export const StyledLabel = styled.label`
  padding: 3px;
  ${StyledBorderBase}
`

export const StyledInput = styled.input`
  padding: 5px;
  ${StyledBorderBase}
`

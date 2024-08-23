import deleteIcon from '/images/deleteIcon.svg';
import { StyledDeleteButton } from './styleDeleteButton';
import { StyledImgButton } from '../styleGeneral';

export const DeleteButton = ({ onClearInputs }) => {
  return(
    <StyledDeleteButton onClick={onClearInputs}>
      <StyledImgButton src={deleteIcon} alt="delete icon" />
    </StyledDeleteButton>
  )
}
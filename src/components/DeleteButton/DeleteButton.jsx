import deleteIcon from '../../images/deleteIcon.svg';
import { StyledDeleteButton } from './styleDeleteButton';
import { StyledImgButton } from '../styleGeneral';

export const DeleteButton = () => {
  return(
    <StyledDeleteButton>
      <StyledImgButton src={deleteIcon} alt="delete icon" />
    </StyledDeleteButton>
  )
}
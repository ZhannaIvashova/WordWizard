import editIcon from '../../images/editIcon.svg';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { StyledEditButton } from './styleEditButton';
import { StyledImgButton } from '../styleGeneral';

export const EditButton = () => {
  return(
    <>
      <StyledEditButton>
        <StyledImgButton src={editIcon} alt="edit icon" />
      </StyledEditButton>
      <DeleteButton></DeleteButton>
    </>
  )
}
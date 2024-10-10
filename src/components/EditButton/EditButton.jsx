import editIcon from '/images/editIcon.svg';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { StyledEditButton } from './styleEditButton';
import { StyledImgButton } from '../styleGeneral';


export const EditButton = ({ isDeleteAddedWord, deleteWord, editWord}) => {
  return(
    <>
      <StyledEditButton onClick={editWord}>
        <StyledImgButton src={editIcon} alt="edit icon" />
      </StyledEditButton>
      <DeleteButton
        isDeleteAddedWord={isDeleteAddedWord}
        deleteWord={deleteWord}>
      </DeleteButton>
    </>
  )
}
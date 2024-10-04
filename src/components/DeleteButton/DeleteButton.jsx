import deleteIcon from '/images/deleteIcon.svg';
import { StyledDeleteButton } from './styleDeleteButton';
import { StyledImgButton } from '../styleGeneral';


export const DeleteButton = ({ onClearInputs, isDeleteAddedWord, deleteWord }) => {
  return(
    <>
    {isDeleteAddedWord
      ? (<StyledDeleteButton onClick={deleteWord}>
        <StyledImgButton src={deleteIcon} alt="delete icon" />
      </StyledDeleteButton>)
      : (<StyledDeleteButton onClick={onClearInputs}>
        <StyledImgButton src={deleteIcon} alt="delete icon" />
      </StyledDeleteButton>)
    }
    </>
  )
}

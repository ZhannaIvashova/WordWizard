import { DeleteButton } from '../DeleteButton/DeleteButton';
import { StyledSaveButton } from './styleSaveButton';

export const SaveButton = ({ onClearInputs, onSaveWord }) => {
  return(
    <>
      <StyledSaveButton onClick={onSaveWord}>Save</StyledSaveButton>
      <DeleteButton onClearInputs={onClearInputs}></DeleteButton>
    </>
  )
}
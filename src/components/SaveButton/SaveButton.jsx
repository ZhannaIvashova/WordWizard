import { DeleteButton } from '../DeleteButton/DeleteButton';
import { StyledSaveButton } from './styleSaveButton';

export const SaveButton = ({ onClearInputs }) => {
  return(
    <>
      <StyledSaveButton>Save</StyledSaveButton>
      <DeleteButton onClearInputs={onClearInputs}></DeleteButton>
    </>
  )
}
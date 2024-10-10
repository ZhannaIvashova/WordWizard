import { DeleteButton } from '../DeleteButton/DeleteButton';
import { StyledSaveButton, StyledBorder } from './styleSaveButton';

export const SaveButton = ({ 
  onClearInputs, onSaveWord, isEditableWord, onSaveEditedWord 
}) => {
  return(
    <StyledBorder>
      {isEditableWord 
        ? <StyledSaveButton onClick={onSaveEditedWord}>Save</StyledSaveButton>
        : <StyledSaveButton onClick={onSaveWord}>Save</StyledSaveButton>
      }
      <DeleteButton onClearInputs={onClearInputs}></DeleteButton>
    </StyledBorder>
  )
}
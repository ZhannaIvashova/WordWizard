import { SaveButton } from '../SaveButton/SaveButton';
import { EditButton } from '../EditButton/EditButton';
import { SyledContainerButton } from './styleContainerButton';


export const ContainerButton = ({ 
  isSave, onClearInputs, onSaveWord, isDeleteAddedWord, 
  deleteWord, editWord, isEditableWord, onSaveEditedWord, isFirst
  }) => {
  return(
    <SyledContainerButton isLast isFirst={isFirst}>
      {isSave ? (
        isEditableWord
        ? <SaveButton 
            onClearInputs={onClearInputs} 
            onSaveEditedWord={onSaveEditedWord}
            isEditableWord>
          Save
          </SaveButton>
        : <SaveButton 
            onClearInputs={onClearInputs} 
            onSaveWord={onSaveWord}>
          Save
          </SaveButton>
        )
        : <EditButton 
            isDeleteAddedWord={isDeleteAddedWord}
            deleteWord={deleteWord}
            editWord={editWord}>
          </EditButton>
      }
    </SyledContainerButton>
  )
}
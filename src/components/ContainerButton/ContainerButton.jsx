import { SaveButton } from '../SaveButton/SaveButton';
import { EditButton } from '../EditButton/EditButton';
import { SyledContainerButton } from './styleContainerButton';


export const ContainerButton = ({ isSave, onClearInputs, 
    onSaveWord, isDeleteAddedWord, deleteWord 
  }) => {
  return(
    <SyledContainerButton isLast>
      {isSave
        ? (<SaveButton 
            onClearInputs={onClearInputs} 
            onSaveWord={onSaveWord}>
          Save
          </SaveButton>)
        : (<EditButton 
            isDeleteAddedWord={isDeleteAddedWord}
            deleteWord={deleteWord}>
          </EditButton>)
      }
    </SyledContainerButton>
  )
}
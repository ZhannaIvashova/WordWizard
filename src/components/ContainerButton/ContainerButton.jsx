import { SaveButton } from '../SaveButton/SaveButton';
import { EditButton } from '../EditButton/EditButton';
import { SyledContainerButton } from './styleContainerButton';

export const ContainerButton = ({ isSave, onClearInputs }) => {
  return(
    <SyledContainerButton isLast>
      {isSave
        ? (<SaveButton onClearInputs={onClearInputs}>Save</SaveButton>)
        : (<EditButton></EditButton>)
      }
    </SyledContainerButton>
  )
}
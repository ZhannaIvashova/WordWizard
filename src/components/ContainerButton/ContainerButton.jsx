import { SaveButton } from '../SaveButton/SaveButton';
import { EditButton } from '../EditButton/EditButton';
import { SyledContainerButton } from './styleContainerButton';

export const ContainerButton = (props) => {
  return(
    <SyledContainerButton isLast>
      {props.isSave
        ? (<SaveButton>Save</SaveButton>)
        : (<EditButton></EditButton>)
      }
    </SyledContainerButton>
  )
}
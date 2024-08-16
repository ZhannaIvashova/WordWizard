import { ContainerButton } from '../ContainerButton/ContainerButton';
import { StyledLabel, StyledInput } from './styleInputTable';
import { StyledItemCell } from '../styleGeneral';

export const InputTable = () => {
  return(
    <>
      <StyledItemCell></StyledItemCell>
      <StyledLabel htmlFor='meaning'>
        <StyledInput 
          type='meaning' id='meaning' name='meaning' placeholder='meaning'>
        </StyledInput>
      </StyledLabel>
      <StyledLabel htmlFor='transcription'>
        <StyledInput 
          type='transcription' id='transcription' name='transcription' placeholder='transcription'>
        </StyledInput>
      </StyledLabel>
      <StyledLabel htmlFor='translation'>
        <StyledInput 
          type='translation' id='translation' name='translation' placeholder='translation'>
        </StyledInput>
      </StyledLabel>
      <StyledLabel htmlFor='theme'>
        <StyledInput 
          type='theme' id='theme' name='theme' placeholder='theme'>
        </StyledInput>
      </StyledLabel>
      <ContainerButton isSave></ContainerButton>
    </>
  )
}

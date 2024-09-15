import { ContainerButton } from '../ContainerButton/ContainerButton';
import { StyledLabel, StyledInput } from './styleInputTable';
import { StyledItemCell } from '../styleGeneral';

export const InputTable = ({ inputValues, onInputChange, onClearInputs, onSaveWord }) => {
  
  return(
    <>
      <StyledItemCell></StyledItemCell>
      <StyledLabel htmlFor='meaning'>
        <StyledInput 
          type='text' 
          id='meaning' 
          name='meaning'
          placeholder='meaning'
          value = {inputValues.meaning}
          onChange={onInputChange}
          >
        </StyledInput>
      </StyledLabel>
      <StyledLabel htmlFor='transcription'>
        <StyledInput 
          type='text' 
          id='transcription' 
          name='transcription' 
          placeholder='transcription'
          value={inputValues.transcription}
          onChange={onInputChange}
          >
        </StyledInput>
      </StyledLabel>
      <StyledLabel htmlFor='translation'>
        <StyledInput 
          type='text' 
          id='translation' 
          name='translation' 
          placeholder='translation'
          value={inputValues.translation}
          onChange={onInputChange}
          >
        </StyledInput>
      </StyledLabel>
      <StyledLabel htmlFor='theme'>
        <StyledInput 
          type='text' 
          id='theme' 
          name='theme' 
          placeholder='theme'
          value={inputValues.theme}
          onChange={onInputChange}
          >
        </StyledInput>
      </StyledLabel>
      <ContainerButton isSave onClearInputs={onClearInputs} onSaveWord={onSaveWord}></ContainerButton>
    </>
  )
}

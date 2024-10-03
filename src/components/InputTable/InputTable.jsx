import { ContainerButton } from '../ContainerButton/ContainerButton';
import { StyledLabel, StyledInput } from './styleInputTable';
import { StyledItemCell } from '../styleGeneral';

export const InputTable = ({ 
  inputValues, onInputChange, onClearInputs, onSaveWord, 
  emptyFields, editingWordId, onSaveEditedWord 
}) => {
  
  //проверяю, находится ли конкретное поле в списке emptyFields
  const isFieldEmpty = (fieldName) => emptyFields.includes(fieldName);

  return(
    <>
      <StyledItemCell></StyledItemCell>
      <StyledLabel htmlFor='meaning'>
        <StyledInput 
          type='text' 
          id='meaning' 
          name='meaning'
          placeholder='meaning'
          required
          value = {inputValues.meaning}
          onChange={onInputChange}
          isError={isFieldEmpty('english')}
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
          isError={isFieldEmpty('transcription')}
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
          isError={isFieldEmpty('russian')}
          >
        </StyledInput>
      </StyledLabel>
      <StyledLabel htmlFor='tags'>
        <StyledInput 
          type='text' 
          id='tags' 
          name='tags' 
          placeholder='tags'
          value={inputValues.tags}
          onChange={onInputChange}
          isError={isFieldEmpty('tags')}
          >
        </StyledInput>
      </StyledLabel>
      {
        editingWordId === null
        ? <ContainerButton 
            isSave 
            onClearInputs={onClearInputs} 
            onSaveWord={onSaveWord}>
          </ContainerButton>
        :  <ContainerButton 
            isSave 
            onClearInputs={onClearInputs} 
            onSaveEditedWord={onSaveEditedWord}
            isEditableWord>
          </ContainerButton>
      }
    </>
  )
}

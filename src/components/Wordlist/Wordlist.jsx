import { useState } from 'react';
import { HeaderTable } from '../HeaderTable/HeaderTable';
import { InputTable } from '../InputTable/InputTable';
import { AddingWords } from '../AddingWords/AddingWords';
import { Card } from '../Card/Card';
import { 
  StyledMain, StyledListContainer, StyledList, 
  StyledListContainerHeader, StyledStartTraining, StyledCard 
} from './styleWordlist';

export const Wordlist = () => {

  const [isVisible, setIsVisible] = useState(true);
  const handleStartTraining = () => setIsVisible(false);
  const handleStopTraining = () => setIsVisible(true);

  const [inputValues, setInputValues] = useState({
    meaning: '',
    transcription: '',
    translation: '',
    theme: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  const handleClearInputs = () => {
    setInputValues({
      meaning: '',
      transcription: '',
      translation: '',
      theme: ''
    });
  };

  return(
    <StyledMain>
      <StyledListContainer>
        <StyledListContainerHeader>
          {isVisible ? (
            <>
              <h2>Список слов</h2>
              <StyledStartTraining onClick={handleStartTraining}>
                Тренироваться
              </StyledStartTraining>
            </>
          )  : (
            <>
              <h2>Режим тренировки</h2>
              <StyledStartTraining onClick={handleStopTraining}>
                Закончить тренировку
              </StyledStartTraining>
            </>  
          )}       
        </StyledListContainerHeader>
        {isVisible ?
          <StyledList>
            <HeaderTable />
            <InputTable 
              inputValues={inputValues} 
              onInputChange={handleInputChange} 
              onClearInputs={handleClearInputs}
            />
            <AddingWords />
          </StyledList>
          : <StyledCard><Card /></StyledCard>
        }
      </StyledListContainer>
    </StyledMain>
  )
}

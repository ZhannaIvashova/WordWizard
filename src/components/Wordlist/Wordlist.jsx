import { useState } from 'react';
import { WORDS } from '../../constants';
import { HeaderTable } from '../HeaderTable/HeaderTable';
import { InputTable } from '../InputTable/InputTable';
import { AddingWords } from '../AddingWords/AddingWords';
import { CardContainer } from '../CardContainer/CardContainer';
import { 
  StyledMain, StyledListContainer, StyledList, 
  StyledListContainerHeader, StyledStartTraining, StyledCardWrap 
} from './styleWordlist';


export const Wordlist = () => {

  const [isVisible, setIsVisible] = useState(true);
  const handleStartTraining = () => setIsVisible(false);
  const handleStopTraining = () => setIsVisible(true);

  const [words, setWords] = useState(WORDS);

  const [inputValues, setInputValues] = useState({
    meaning: '',
    transcription: '',
    translation: '',
    theme: ''
  })

  const handleInputChange = (e) => {
    console.log(e.target)
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

  const handleSaveWord = () => {
    const newWord = {
      id: words.length + 1,
      english: inputValues.meaning,
      transcription: inputValues.transcription,
      russian: inputValues.translation,
      theme: inputValues.theme,
    };

    setWords([...words, newWord]);

    handleClearInputs();
  }


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
              onSaveWord={handleSaveWord}
            />
            <AddingWords words={words} />
          </StyledList>
          : <StyledCardWrap>
              <CardContainer />
            </StyledCardWrap>
        }
      </StyledListContainer>
    </StyledMain>
  )
}

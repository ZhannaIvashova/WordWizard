import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { WORDS } from '../../constants';
import { HeaderTable } from '../HeaderTable/HeaderTable';
import { InputTable } from '../InputTable/InputTable';
import { AddingWords } from '../AddingWords/AddingWords';
import { CardContainer } from '../CardContainer/CardContainer';
import { Missing } from '../Missing/Missing';
import { 
  StyledMain, StyledListContainer, StyledList, 
  StyledCardWrap, StyleEndTrainingLink 
} from './styleWordlist';

/*let randomWords = WORDS.sort(() => Math.random() - 0.5)*/

export const Wordlist = () => {

  const [words, setWords] = useState(WORDS);
  const [emptyFields, setEmptyFields] = useState([]);

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
    setEmptyFields([]);
  };

  const checkEmptyFields = (newWord) => {
    const emptyFieldsNewWords = [];

    for(let key in newWord) {
      if (newWord[key] === '') {
        emptyFieldsNewWords.push(key)
      }
    }
    if (emptyFieldsNewWords.length >= 1) {
      setEmptyFields(emptyFieldsNewWords)
    } else {
      setWords([...words, newWord]);
      handleClearInputs();
    }
  }

  const handleSaveWord = () => {
    const newWord = {
      id: words.length + 1,
      english: inputValues.meaning.trim(),
      transcription: inputValues.transcription.trim(),
      russian: inputValues.translation.trim(),
      theme: inputValues.theme.trim(),
    };
    checkEmptyFields(newWord)
  }

  const handleDeleteWord = (wordName) => {
    console.log(wordName)
    const updatedList = words.filter(word => word.id !== wordName)
    console.log(updatedList)
    setWords(updatedList)
  }


  return(
    <StyledMain>
      <StyledListContainer>
        <Routes>
          <Route path="/WordWizard" element={
            <>
              <h2>Список слов</h2>
              <StyledList>
                <HeaderTable />
                <InputTable 
                  inputValues={inputValues}
                  onInputChange={handleInputChange}
                  onClearInputs={handleClearInputs}
                  onSaveWord={handleSaveWord}
                  emptyFields={emptyFields}
                />
                <AddingWords
                  words={words}
                  deleteWord={handleDeleteWord}
                />
              </StyledList>
            </>}
          />

          <Route path="/WordWizard/game" element={
            <>
              <h2><StyleEndTrainingLink to="/WordWizard">Закончить тренировку</StyleEndTrainingLink></h2>
              <StyledCardWrap>
                <CardContainer words={words} />
              </StyledCardWrap>
            </>}
          /> 

          <Route path='*' element={<Missing />}/>
        </Routes>
      </StyledListContainer>
    </StyledMain>
  )
}

/*
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
              <CardContainer words={words} />
            </StyledCardWrap>
        }
*/

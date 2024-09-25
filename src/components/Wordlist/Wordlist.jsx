import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import useFetchWords from '../../hooks/useFetchWords';

import { HeaderTable } from '../HeaderTable/HeaderTable';
import { InputTable } from '../InputTable/InputTable';
import { AddingWords } from '../AddingWords/AddingWords';
import { CardContainer } from '../CardContainer/CardContainer';
import { Missing } from '../Missing/Missing';
import { 
  StyledMain, StyledListContainer, StyledList, 
  StyledCardWrap, StyleEndTrainingLink 
} from './styleWordlist';


export const Wordlist = () => {

  const [words, addWord, deleteWord, editWord] = useFetchWords();
  const [emptyFields, setEmptyFields] = useState([]);
  const [editingWordId, setEditingWordId] = useState(null);

  const [inputValues, setInputValues] = useState({
    meaning: '',
    transcription: '',
    translation: '',
    tags: ''
  })

  const handleEditWord = (id) => {
    console.log(id)
    setEditingWordId(id)
    const wordToEdit = words.find(word => word.id === id)
    setInputValues({
      meaning: wordToEdit.english,
      transcription: wordToEdit.transcription,
      translation: wordToEdit.russian,
      tags: wordToEdit.tags
    });
  }

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
      tags: ''
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
      handleClearInputs()
      return newWord;
    }
  }

  const handleSaveWord = () => {
    const newWord = {
      english: inputValues.meaning.trim(),
      transcription: inputValues.transcription.trim(),
      russian: inputValues.translation.trim(),
      tags: inputValues.tags.trim(),
    };
    const newWordValid = checkEmptyFields(newWord);
    addWord(newWordValid)
  }
  
  //ПРИ НАЖАТИИ НА SAVE A ПОТОМ НА EDIT  убрать красные рамочки!!!!!!!!!
  //запрос на сохранение редактированного слова
  const handleSaveEditedWord = () => {
    const newEditedWord = {
      english: inputValues.meaning.trim(),
      transcription: inputValues.transcription.trim(),
      russian: inputValues.translation.trim(),
      tags: inputValues.tags.trim(),
    };
    const newEditedWordValid = checkEmptyFields(newEditedWord);
    if (newEditedWordValid) {
      editWord(newEditedWordValid, editingWordId)
      setEditingWordId(null);
    }
  }

  const handleDeleteWord = (id) => {
    console.log(id)
    deleteWord(id)
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
                  editingWordId={editingWordId}
                  onSaveEditedWord={handleSaveEditedWord}
                />
                <AddingWords
                  words={words}
                  deleteWord={handleDeleteWord}
                  editWord={handleEditWord}
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

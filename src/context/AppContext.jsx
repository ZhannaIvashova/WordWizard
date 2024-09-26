import React, { useState, useEffect, createContext } from 'react';

//создала контекст
export const AppContext = createContext();

//провайдер контекста
export const AppProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const fetchWords = () => {

      setLoading(true)
      fetch('/api/words')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('data', data);
          setWords(data)
          setError(false);
        })
        .catch((error) => {
          console.log('Error: ',error)
          setError(true)
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
          console.log('Загрузка завершена')
        })
  }

  const addWord = (newWord) => {
    console.log('addWord', newWord);
    console.log('JSON.stringify', JSON.stringify(newWord));
    fetch('/api/words/add', {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('response', data);
        if (data.hasOwnProperty('id')) {
          setWords((currentWords) => {
            console.log('Текущее состояние:', currentWords);
            return [...currentWords, data];
          });
        }
      })
      .catch((error) => console.log('Error: ',error))
  }


  const deleteWord = (id) => {
    fetch(`/api/words/${id}/delete`, {
      method: "POST",
    })
      .then(response => response.json())
      .then((data) => {
        if (data === true) {
          setWords((currentWords) => 
            currentWords.filter(word => word.id !== id)
          )
        }
      })
      .catch((error) => console.log('Error: ',error))
  }


  const editWord = (newEditedWord, id) => {
    fetch(`/api/words/${id}/update`, {
      method: "POST",
      body: JSON.stringify(newEditedWord),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('data ', data)
      if (data.hasOwnProperty('id')) {
        setWords((currentWords) => {
          const updatedWords = currentWords.map((word) => {
          if (word.id === id) {
            return {
              ...word,
              english: data.english,
              transcription: data.transcription,
              russian: data.russian,
              tags: data.tags
            };
          }
          return word;
        })
        console.log('updatedWords ', updatedWords)
        return updatedWords
      })
      }
    })
    .catch((error) => console.log('Error: ',error))
  }


  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <AppContext.Provider 
      value={{
        words,
        addWord,
        editWord,
        deleteWord,
        loading,
        error
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
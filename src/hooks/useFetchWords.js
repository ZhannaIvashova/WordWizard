import { useState, useEffect } from 'react';

export default function useFetchWords() {
  
  const [value, setValue] = useState([]);

  //get-запрос на получение данных при загрузке страницы
  useEffect(() => {
    fetch('/api/words')
    //при get-запросе сервер обработывает ошибки
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        setValue(data)
      })
      .catch((error) => console.log('Error: ',error))
  }, [])
  
  //post-запрос на добавление нового слова
  //СДЕЛАТЬ ВАЛИДАЦИЮ НА СУЩЕСТВУЮЩЕЕ СЛОВО!!!!!!!!!!!!!!!
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
    //при post-запросе сервер не отдает никакой статус кроме 200 (даже с неправильным URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('response', data);
        //т.к. сервер на неверный URL отдает статус 200, делаю проверку на содержимое объекта data, чтобы не добавлять пустую строчку на html страничку
        if (data.hasOwnProperty('id')) {
          //в функции получаю актуальное состояние value в аргументе currentWords и добавляюю новое слово
          setValue((currentWords) => {
            console.log('Текущее состояние:', currentWords);
            return [...currentWords, data];
          });
        }
      })
      .catch((error) => console.log('Error: ',error))
  }
  
  //post-запрос на удаление существующего слова
  const deleteWord = (id) => {
    fetch(`/api/words/${id}/delete`, {
      method: "POST",
    })
      .then(response => response.json())
      .then((data) => {
        if (data === true) {
          setValue((currentWords) => {
            const updatedList = currentWords.filter(word => word.id !== id);
            return updatedList
          })
        }
      })
      .catch((error) => console.log('Error: ',error))
  }
  
  //post-запрос на редактирование существующего слова
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
        
        setValue((currentWords) => {
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

  return [value, addWord, deleteWord, editWord]
}


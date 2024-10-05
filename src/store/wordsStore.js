import { makeAutoObservable, when } from "mobx";
import { createContext } from "react";

class WordsStore {
  words = []
  status = 'start'
  loading = false;
  error = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchWords = () => {
    this.loading = true;

    fetch('/api/words')
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        this.words = data
        this.status = 'success'
      })
      .catch((error) => {
        console.log('Error: ',error)
        error = true;
      })
      .finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000)
        console.log('Загрузка завершена')
      })
  }


  addWord = (newWord) => {
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
        console.log('response', response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('(data', data);

        if (data.hasOwnProperty('id')) {
          this.words = [...this.words, data]
        }
      })
      .catch((error) => console.log('Error: ',error))
  }


  deleteWord = (id) => {
    fetch(`/api/words/${id}/delete`, {
      method: "POST",
    })
      .then(response => response.json())
      .then((data) => {
        if (data === true) {
          console.log(data)
          this.words = this.words.filter(word => word.id !== id)
        }
      })
      .catch((error) => console.log('Error: ',error))
  }


  editWord = (newEditedWord, id) => {
    fetch(`/api/words/${id}/update`, {
      method: "POST",
      body: JSON.stringify(newEditedWord),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.hasOwnProperty('id')) {
        console.log(data)
        this.words = this.words.map((word) => {
          if (word.id === id) {
            return {
              ...word,
              english: data.english,
              transcription: data.transcription,
              russian: data.russian,
              tags: data.tags
            }
          }
          return word;
        })
      }
    })
    .catch((error) => console.log('Error: ',error))
  }
}


export const wordsStore = new WordsStore()
export const wordsStoreContext = createContext(wordsStore)

when (
  () => wordsStore.status === 'start',
  () => wordsStore.fetchWords()
)


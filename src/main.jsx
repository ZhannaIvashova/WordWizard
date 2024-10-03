import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'mobx-react';
import { wordsStore } from './store/wordsStore.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider wordsStore={wordsStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)

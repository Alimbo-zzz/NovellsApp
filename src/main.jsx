import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@pages/index.jsx'
import '@styles/index.scss'
import '@scripts/getImages'
import store from '@/store/index.js';
import { Provider } from 'react-redux'

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
)

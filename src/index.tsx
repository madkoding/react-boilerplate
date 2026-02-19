import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './assets/index.css'
import reportWebVitals from './utils/reportWebVitals/reportWebVitals.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()

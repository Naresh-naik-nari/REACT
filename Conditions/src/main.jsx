import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardPage from './conditions/CardPage.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

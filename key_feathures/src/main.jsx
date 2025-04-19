import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeaderPage from './Components/HeaderPage.jsx'
import BodyPage from './Components/BodyPage.jsx'
import FooterPage from './Components/FooterPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderPage/>
    <BodyPage/>
    <FooterPage/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import MainPage from './Page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)

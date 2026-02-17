import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import MainPage from './Page'
import ErrorBoundary from './components/ErrorBoundary'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  </StrictMode>,
)

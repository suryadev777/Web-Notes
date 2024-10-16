import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { SearchPopup } from './Components/Popups/SearchPopup'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchPopup></SearchPopup>
  </StrictMode>,
)

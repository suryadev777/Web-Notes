import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { SearchItems } from './Components/Popups/SearchPopupItems'

import { SearchPopup } from './Components/Popups/SearchPopup'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchPopup items={SearchItems}></SearchPopup>
  </StrictMode>,
)

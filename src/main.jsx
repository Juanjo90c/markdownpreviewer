import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MarkdownPreviewer from './MarkdownPreviewer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarkdownPreviewer/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppBackup from './AppBackup.jsx'
import App1 from './App1.jsx'
import Q2 from './Question/Session2/Q2.jsx'
import Q3 from './Question/Session2/Q3.jsx'
import Q4 from './Question/Session2/Q4.jsx'
import Q5 from './Question/Session2/Q5.jsx'
import Q6 from './Question/Session2/Q6.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Q4/>
  </StrictMode>
)

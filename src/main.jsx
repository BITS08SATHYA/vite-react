import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './App_UseState.jsx'
// import App from './App_Forms.jsx'
// import App from './App_ColorPicket.jsx'
// import App from './App_UseEffect.jsx'
import App from './App_MouseTracker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import SignIn from './pages/SignIn'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
)

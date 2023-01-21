import React from 'react'
import ReactDOM from 'react-dom/client'
import { NewMovie } from './pages/NewMovie'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NewMovie />
    </ThemeProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './Routes'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)

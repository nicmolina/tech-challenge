import { ThemeProvider } from '@mui/material'
import { ClientDetailsProvider } from './contexts/client/ClientDetailsProvider'
import { Routes } from './routes'
import { theme } from './styles/createMuiTheme'
import './index.css'

const App = () => {
  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <ClientDetailsProvider>
          <Routes />
        </ClientDetailsProvider>
      </ThemeProvider>
    </div>
  )
}

export default App

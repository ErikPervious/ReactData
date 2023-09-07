import { Routes } from './routes'
import { UserProvider } from './contexts/useUser'

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  )
}

export default App

import '../styles/globals.css'
import { AuthProvider } from '../utils/auth'

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App

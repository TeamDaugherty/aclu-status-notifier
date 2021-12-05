import './App.css'
import MainPage from './components/MainPage'

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          <div className='header-title'>
            ACLU
          </div>
          <div className='header-action'>
            <AmplifySignOut />
          </div>

      </header>
      <div >
        <MainPage />
      </div>
    </div>
  )
}

export default withAuthenticator(App);

import './App.css'
import LeftPane from './components/leftPane'
import RightPane from './components/rightPane'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>ACLU</header>
      <div className='rowC'>
        <LeftPane />
        <RightPane />
      </div>
    </div>
  )
}

export default App

import './App.css'

import Alert from './components/Alert';
import MyButton from './components/MyButton';
function App() {

  return (
  <>
      <Alert type="success">Your Changes has been Saved</Alert>
      <Alert type="error">Something went wrong</Alert>
      <MyButton/>
 </>
  )
}

export default App

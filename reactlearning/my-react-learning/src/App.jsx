import './App.css'
import Welcome from './components/Welcome';
import Products from './components/Products'
import UserCard from './components/UserCard';
import CardWrapper from './components/CardWrapper';
import UserDetails from './components/UserDetails';

function App() {

  return (
  <>
    <UserDetails name="Tom" isOnline={true}/>
    <UserDetails name="Jerry" isOnline={false} hideOffLine={true}></UserDetails>
 </>
  )
}

export default App

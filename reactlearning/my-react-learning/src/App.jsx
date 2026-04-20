import './App.css'
import Welcome from './components/Welcome';
import Products from './components/Products'
import UserCard from './components/UserCard';
import CardWrapper from './components/CardWrapper';
import CustomButton from './components/CustomButton';
import MyButton from './components/MyButton';
import ContactUsButton from './components/ContactUsButton';
import SubscribeButton from './components/SubscribeButton';
import Menu from './components/Menu';

function App() {

  return (
  <>

      <Menu/>


    <ContactUsButton/>
    <SubscribeButton/>

      <CustomButton/>

      <MyButton text='Like 👍'/>
      <MyButton text='Unlike '/>


 </>
  )
}

export default App

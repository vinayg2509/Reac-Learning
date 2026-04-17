import './App.css'
import Welcome from './components/Welcome';
import Products from './components/Products'
import UserCard from './components/UserCard';
import CardWrapper from './components/CardWrapper';

function App() {

  return (
  <>


    <CardWrapper title={"User Profile"}>

      <p>Vinay</p>
      <p>Bangalore</p>

    </CardWrapper>

    <Welcome />
    <Welcome name="Vinay"/>
    <Welcome message="Good Morning"/> 

     <Products title="Gaming Laptop" price={23414} inStock={true} category={['Electronics',"Laptop","Gaming"]}/> 
      <UserCard name="Vinay" age={32} city="Bangalore" email="vinay@gmail,com"/>
 
 </>
  )
}

export default App

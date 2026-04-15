import Navbar from "./component/Navbar.js";
import TextForm from "./component/TextForm.js";




function App() {
  return (
    <>
      <Navbar title="Flipkart" aboutText="About Us"/>
      <div className='container'>
        <TextForm heading="Welcome" label="Enter text to perform operation"/>
      </div>


    </>
  );
}

export default App;

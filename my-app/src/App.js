import Alert from "./component/Alert.js";
import Navbar from "./component/Navbar.js";
import TextForm from "./component/TextForm.js";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./component/About.js";
import Home from "./component/Home.js";


function App() {
const [mode, setMode] = useState("light");
const [alert, setAlert] = useState(null)

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    showAlert(null)
  },3000)
}



const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor="grey"
    showAlert("Dark mode enabled","Success")
  } else {
    setMode("light");
  document.body.style.backgroundColor="white"
    showAlert("Light mode enabled","Success")


  }
};

return (
  <>
    <Navbar
      title="Flipkart"
      aboutText="About Us"
      mode={mode}
      toggleMode={toggleMode}
    />

      <Alert alert={alert}/>

    <div className="container">
      <TextForm  showAlert={showAlert} heading="Welcome" label="Enter text to perform operation" />
    </div>

    <div className='container'>
       <About/>
    </div>

    <div className='container'>
       <Home/>
    </div>

    
  </>
);
}

export default App;
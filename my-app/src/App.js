import Navbar from "./component/Navbar.js";
import TextForm from "./component/TextForm.js";
import { useState } from "react";

function App() {
const [mode, setMode] = useState("light");

const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor="grey"
  } else {
    setMode("light");
    document.body.style.backgroundColor="white"

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
    <div className="container">
      <TextForm heading="Welcome" label="Enter text to perform operation" />
    </div>
  </>
);
}

export default App;
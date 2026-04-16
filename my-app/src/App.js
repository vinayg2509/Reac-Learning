import Alert from "./component/Alert.js";
import Navbar from "./component/Navbar.js";
import TextForm from "./component/TextForm.js";
import { useState } from "react";
import About from "./component/About.js";
import Home from "./component/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "Success");
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="Text Util"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <Routes>
        <Route path="/home" element={<div className="container"><Home /></div>} />
        <Route
          path="/text-form"
          element={
            <div className="container">
              <TextForm
                showAlert={showAlert}
                heading="Welcome"
                label="Enter text to perform operation"
              />
            </div>
          }
        />
        <Route path="/about" element={<div className="container"><About /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
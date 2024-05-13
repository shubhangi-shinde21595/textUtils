import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;

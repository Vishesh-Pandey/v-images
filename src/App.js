import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <Navbar changeTheme={changeTheme} theme={theme} />
      <Routes>
        <Route path="/low" element={<Home quality="low" theme={theme} />} />
        <Route
          path="/v-images"
          element={<Home quality="high" theme={theme} />}
        />
      </Routes>
    </>
  );
}

export default App;

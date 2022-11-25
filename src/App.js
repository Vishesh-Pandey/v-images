import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import FilterState from "./context/filter/FilterState";

function App() {
  const apiKey = process.env.REACT_APP_MY_API;

  const [theme, setTheme] = useState("light");
  const [onlySquare, setOnlySquare] = useState(false);

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.style.backgroundColor = "white";
    } else {
      setTheme("dark");
      document.body.style.backgroundColor = "#212529";
    }
  };

  return (
    <>
      <FilterState>
        <Navbar
          id="navbar"
          changeTheme={changeTheme}
          theme={theme}
          onlySquare={onlySquare}
          setOnlySquare={setOnlySquare}
        />
        <Routes>
          <Route
            path="/low"
            element={
              <Home
                quality="low"
                apiKey={apiKey}
                theme={theme}
                onlySquare={onlySquare}
              />
            }
          />
          <Route
            path="/v-images"
            element={
              <Home
                apiKey={apiKey}
                quality="high"
                theme={theme}
                onlySquare={onlySquare}
              />
            }
          />
        </Routes>
      </FilterState>
    </>
  );
}

export default App;

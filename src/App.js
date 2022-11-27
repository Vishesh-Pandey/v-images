import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import FilterState from "./context/filter/FilterState";
import ThemeState from "./context/theme/ThemeState";

function App() {
  const apiKey = process.env.REACT_APP_MY_API;
  return (
    <>
      <ThemeState>
        <FilterState>
          <Navbar id="navbar" />
          <Routes>
            <Route
              path="/low"
              element={<Home quality="low" apiKey={apiKey} />}
            />
            <Route
              path="/v-images"
              element={<Home apiKey={apiKey} quality="high" />}
            />
          </Routes>
        </FilterState>
      </ThemeState>
    </>
  );
}

export default App;

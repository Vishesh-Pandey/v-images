import ThemeContext from "./themeContext";
import { useState } from "react";

const ThemeState = (props) => {
  const s = {
    theme: "light",
  };

  const [state, setState] = useState(s);

  const update = (givenState) => {
    if (givenState === "dark") {
      document.body.style.backgroundColor = "#2a2727";
    } else {
      document.body.style.backgroundColor = "white";
    }
    setState({ theme: givenState });
  };

  return (
    <ThemeContext.Provider value={{ state, update }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;

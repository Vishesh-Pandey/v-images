import FilterContext from "./filterContext";
import { useState } from "react";

const FilterState = (props) => {
  const s = {
    onlySquare: false,
  };

  const [state, setState] = useState(s);

  const update = (givenState) => {
    setState({ onlySquare: givenState });
  };

  return (
    <FilterContext.Provider value={{ state, update }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterState;

import React from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import vicon from "../assets/favicon_ico.png";
import filterContext from "../context/filter/filterContext";
import themeContext from "../context/theme/themeContext";

function Navbar(props) {
  let location = useLocation();
  const filter = useContext(filterContext);
  const theme = useContext(themeContext);

  return (
    <>
      <nav
        className={`navbar navbar-${theme.state.theme} navbar-expand-lg bg-${
          theme.state.theme === "dark" ? "dark" : "light"
        } sticky-top`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/v-images">
            <img src={vicon} width={40} alt="v-images" />
          </Link>
          <Link className="navbar-brand" to="/v-images">
            vImages
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/low"
                  className={`${
                    location.pathname === "/low" ? "bg-warning rounded" : ""
                  } nav-link`}
                  aria-current="page"
                  href="#"
                >
                  Low Quality
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/v-images"
                  className={`${
                    location.pathname === "/v-images"
                      ? "bg-warning rounded"
                      : ""
                  } nav-link`}
                  aria-current="page"
                  href="#"
                >
                  High Quality
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filters ( beta )
                </a>
                <ul className="dropdown-menu">
                  <li className="px-2">
                    <div className="form-check">
                      <input
                        onClick={() => {
                          if (filter.state.onlySquare === false) {
                            filter.update(true);
                          } else {
                            filter.update(false);
                          }
                        }}
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckIndeterminate"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckIndeterminate"
                      >
                        Square only
                      </label>
                    </div>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vishesh-pandey.github.io/v-notes/"
                  className="nav-link"
                  aria-current="page"
                >
                  vNotes
                </a>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vishesh-pandey.github.io/v-type/"
                  className="nav-link"
                  aria-current="page"
                >
                  vType
                </a>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Vishesh-Pandey/v-images"
                  className="nav-link"
                  aria-current="page"
                >
                  Contribute
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                defaultChecked=""
                onClick={() => {
                  theme.update(
                    theme.state.theme === "light" ? "dark" : "light"
                  );
                }}
              />
              <label
                className={`form-check-label text-${
                  theme.state.theme === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckChecked"
              >
                {theme.state.theme === "light"
                  ? "Enable Dark Mode"
                  : "Disable Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import vicon from "./favicon_ico.png";

function Navbar(props) {
  let location = useLocation();
  return (
    <>
      <nav
        className={`navbar navbar-${
          props.theme === "dark" ? "dark" : "light"
        } navbar-expand-lg bg-${
          props.theme === "dark" ? "dark" : "light"
        } sticky-top`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/v-images">
            <img src={vicon} width={40} alt="" />
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
              <li className="nav-item">
                <a
                  target="_blank"
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
                onClick={props.changeTheme}
              />
              <label
                className={`form-check-label text-${
                  props.theme === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckChecked"
              >
                {props.theme === "light"
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
